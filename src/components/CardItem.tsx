import React from 'react';
import type { PokemonCard } from '../types/pokemon.js';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

interface CardItemProps {
  card: PokemonCard;
  onAddToCart: (card: PokemonCard) => void;
}

const rarityColors = {
  common: 'bg-muted text-muted-foreground',
  uncommon: 'bg-green-500/20 text-green-300',
  rare: 'bg-blue-500/20 text-blue-300',
  'ultra-rare': 'bg-purple-500/20 text-purple-300',
};

export const CardItem: React.FC<CardItemProps> = ({ card, onAddToCart }) => {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-xl hover:shadow-primary/20">
      <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-muted to-background">
        <img
          src={card.image}
          alt={card.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      
      <CardContent className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-lg line-clamp-1">{card.name}</h3>
          <span className={cn(
            'shrink-0 rounded-full px-2 py-1 text-xs font-medium',
            rarityColors[card.rarity]
          )}>
            {card.rarity}
          </span>
        </div>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="text-xs">{card.set}</span>
          <span className="text-xs">Stock: {card.stock}</span>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <span className="text-2xl font-bold">
          ${card.price.toFixed(2)}
        </span>
        <Button
          onClick={() => onAddToCart(card)}
          disabled={card.stock === 0}
          size="default"
        >
          {card.stock > 0 ? 'Agregar' : 'Sin Stock'}
        </Button>
      </CardFooter>
    </Card>
  );
};
