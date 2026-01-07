import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">⚡ metap4metap</h1>
        </div>
        
        <nav className="hidden md:flex gap-6">
          <a href="#catalog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Catálogo
          </a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Acerca de
          </a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contacto
          </a>
        </nav>

        <Button
          onClick={onCartClick}
          className="relative"
          size="default"
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="hidden sm:inline">Carrito</span>
          {cartItemCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-destructive text-xs text-destructive-foreground">
              {cartItemCount}
            </span>
          )}
        </Button>
      </div>
    </header>
  );
};
