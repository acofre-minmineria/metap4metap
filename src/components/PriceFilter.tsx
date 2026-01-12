import React from 'react';
import { Button } from './ui/button';

interface PriceFilterProps {
  onFilterChange: (min: number, max: number) => void;
  onReset: () => void;
}

export const PriceFilter: React.FC<PriceFilterProps> = ({ onFilterChange, onReset }) => {
  const [minPrice, setMinPrice] = React.useState<string>('');
  const [maxPrice, setMaxPrice] = React.useState<string>('');

  const handleApplyFilter = () => {
    const min = minPrice ? parseFloat(minPrice) : 0;
    const max = maxPrice ? parseFloat(maxPrice) : Infinity;
    onFilterChange(min, max);
  };

  const handleReset = () => {
    setMinPrice('');
    setMaxPrice('');
    onReset();
  };

  const priceRanges = [
    { label: 'Menos de $10', min: 0, max: 10 },
    { label: '$10 - $20', min: 10, max: 20 },
    { label: '$20 - $50', min: 20, max: 50 },
    { label: 'Más de $50', min: 50, max: Infinity },
  ];

  return (
    <div className="bg-card rounded-lg border p-6 space-y-4">
      <h3 className="text-lg font-semibold">Filtrar por Precio</h3>
      
      {/* Quick filters */}
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground mb-2">Rangos rápidos:</p>
        <div className="grid grid-cols-2 gap-2">
          {priceRanges.map((range) => (
            <Button
              key={range.label}
              variant="outline"
              size="sm"
              onClick={() => onFilterChange(range.min, range.max)}
              className="text-xs"
            >
              {range.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="border-t pt-4">
        <p className="text-sm text-muted-foreground mb-3">Rango personalizado:</p>
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <label className="text-xs text-muted-foreground block mb-1">Mínimo</label>
            <input
              type="number"
              placeholder="$0"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
              min="0"
              step="0.01"
            />
          </div>
          <span className="text-muted-foreground mt-5">-</span>
          <div className="flex-1">
            <label className="text-xs text-muted-foreground block mb-1">Máximo</label>
            <input
              type="number"
              placeholder="$∞"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
              min="0"
              step="0.01"
            />
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <Button onClick={handleApplyFilter} className="flex-1" size="sm">
            Aplicar
          </Button>
          <Button onClick={handleReset} variant="outline" size="sm">
            Limpiar
          </Button>
        </div>
      </div>
    </div>
  );
};
