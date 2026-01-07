import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { cards, orders } from './data/store';
import { Order } from './types';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://*.github.io', // Permite cualquier dominio de GitHub Pages
    process.env.FRONTEND_URL || ''
  ].filter(Boolean),
  credentials: true
}));
app.use(express.json());

// Routes

// GET all cards
app.get('/api/cards', (req: Request, res: Response) => {
  res.json(cards);
});

// GET card by ID
app.get('/api/cards/:id', (req: Request, res: Response) => {
  const card = cards.find(c => c.id === req.params.id);
  if (!card) {
    return res.status(404).json({ error: 'Card not found' });
  }
  res.json(card);
});

// POST create order
app.post('/api/orders', (req: Request, res: Response) => {
  const { items, customerEmail } = req.body;

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Items are required' });
  }

  if (!customerEmail) {
    return res.status(400).json({ error: 'Customer email is required' });
  }

  // Validate stock
  for (const item of items) {
    const card = cards.find(c => c.id === item.cardId);
    if (!card) {
      return res.status(404).json({ error: `Card ${item.cardId} not found` });
    }
    if (card.stock < item.quantity) {
      return res.status(400).json({ 
        error: `Insufficient stock for ${card.name}. Available: ${card.stock}` 
      });
    }
  }

  // Calculate total
  let total = 0;
  const orderItems = items.map((item: any) => {
    const card = cards.find(c => c.id === item.cardId)!;
    total += card.price * item.quantity;
    return {
      cardId: item.cardId,
      quantity: item.quantity,
      price: card.price,
    };
  });

  // Update stock
  items.forEach((item: any) => {
    const card = cards.find(c => c.id === item.cardId)!;
    card.stock -= item.quantity;
  });

  // Create order
  const order: Order = {
    id: Date.now().toString(),
    items: orderItems,
    total,
    customerEmail,
    status: 'pending',
    createdAt: new Date(),
  };

  orders.push(order);
  res.status(201).json(order);
});

// GET all orders
app.get('/api/orders', (req: Request, res: Response) => {
  res.json(orders);
});

// GET order by ID
app.get('/api/orders/:id', (req: Request, res: Response) => {
  const order = orders.find(o => o.id === req.params.id);
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }
  res.json(order);
});

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
