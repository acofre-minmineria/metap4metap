# Backend - Tienda Pokémon API

API REST para la tienda de cartas Pokémon.

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Variables de Entorno

Crea un archivo `.env`:

```
PORT=3000
NODE_ENV=development
```

## Endpoints

- `GET /api/cards` - Obtener todas las cartas
- `GET /api/cards/:id` - Obtener carta por ID
- `POST /api/orders` - Crear orden
- `GET /api/orders` - Obtener todas las órdenes
- `GET /api/orders/:id` - Obtener orden por ID
- `GET /health` - Health check
