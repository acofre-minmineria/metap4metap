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

export interface CartItem extends PokemonCard {
  quantity: number;
}
