export interface PokemonCard {
  id: string;
  name: string;
  image: string;
  price: number;
  rarity: 'common' | 'uncommon' | 'rare' | 'ultra-rare';
  set: string;
  stock: number;
  type: string;
  hp?: number;
}

export interface Order {
  id: string;
  items: {
    cardId: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  customerEmail: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  createdAt: Date;
}
