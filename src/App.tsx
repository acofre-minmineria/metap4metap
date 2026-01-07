import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CardItem } from './components/CardItem';
import { ShoppingCart } from './components/ShoppingCart';
import type { PokemonCard, CartItem } from './types/pokemon.js';
import { mockCards } from './data/cards';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (card: PokemonCard) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === card.id);
      if (existing) {
        return prev.map((item) =>
          item.id === card.id
            ? { ...item, quantity: Math.min(item.quantity + 1, card.stock) }
            : item
        );
      }
      return [...prev, { ...card, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemCount={totalItems} onCartClick={() => setIsCartOpen(true)} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">
              ¡Bienvenido a metap4metap!
            </h1>
            <p className="text-xl mb-8">
              Las mejores cartas Pokémon al mejor precio
            </p>
            <a
              href="#catalog"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Ver Catálogo
            </a>
          </div>
        </section>

        {/* Catalog Section */}
        <section id="catalog" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Catálogo de Cartas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mockCards.map((card) => (
                <CardItem key={card.id} card={card} onAddToCart={addToCart} />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Acerca de Nosotros
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700 mb-4">
                Somos una tienda especializada en cartas Pokémon con más de 10 años de experiencia.
                Garantizamos la autenticidad de todas nuestras cartas.
              </p>
              <p className="text-lg text-gray-700">
                Envíos a todo el país. ¡Encuentra tu carta favorita!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Contacto
            </h2>
            <div className="max-w-md mx-auto text-center">
              <p className="text-lg text-gray-700 mb-4">
                ¿Tienes preguntas? ¡Contáctanos!
              </p>
              <p className="text-gray-600">
                Email: info@pokecards.com
              </p>
              <p className="text-gray-600">
                Teléfono: +1 (555) 123-4567
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
}

export default App;

