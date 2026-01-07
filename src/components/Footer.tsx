import React from 'react';
import { Github, Mail } from 'lucide-react';
import { Button } from './ui/button';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold">⚡ metap4metap</h3>
            <p className="text-sm text-muted-foreground">
              Tu tienda de confianza para cartas Pokémon. Autenticidad garantizada.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-bold">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#catalog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Catálogo
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Contacto</h3>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                asChild
              >
                <a href="mailto:info@pokecards.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} metap4metap. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};
