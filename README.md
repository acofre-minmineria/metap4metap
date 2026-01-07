# Tienda de Cartas Pokémon 🎴⚡

Sitio web completo para tienda de cartas Pokémon con React + TypeScript + Vite en el frontend y Node.js + Express en el backend.

## 🚀 Características

- ✅ Catálogo de cartas interactivo
- 🛒 Carrito de compras funcional
- 📱 Diseño responsive
- 🎨 UI moderna con TailwindCSS
- 🔥 API REST completa
- 💾 Sistema de pedidos

## 📦 Estructura del Proyecto

```
tienda-pokemon/
├── src/              # Frontend (React + TypeScript)
│   ├── components/   # Componentes React
│   ├── types/        # Definiciones TypeScript
│   ├── data/         # Datos mock
│   └── lib/          # Utilidades
└── backend/          # Backend (Node.js + Express)
    └── src/
        ├── data/     # Store de datos
        ├── types/    # Tipos TypeScript
        └── index.ts  # Servidor principal
```

## 🛠️ Instalación y Desarrollo

### Frontend

```bash
npm install
npm run dev
```

El frontend estará disponible en `http://localhost:5173`

### Backend

```bash
cd backend
npm install
npm run dev
```

El backend estará disponible en `http://localhost:3000`

## 📡 API Endpoints

### Cartas
- `GET /api/cards` - Obtener todas las cartas
- `GET /api/cards/:id` - Obtener carta por ID

### Órdenes
- `POST /api/orders` - Crear nueva orden
- `GET /api/orders` - Obtener todas las órdenes
- `GET /api/orders/:id` - Obtener orden por ID

### Health Check
- `GET /health` - Verificar estado del servidor

## 🌐 Deploy GRATUITO con GitHub

### Opción Recomendada: GitHub Pages + Render/Railway

**Frontend en GitHub Pages (100% Gratis)**

1. **Configurar GitHub Pages:**
   
   Primero, actualiza `vite.config.ts` para GitHub Pages:
   ```typescript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   
   export default defineConfig({
     plugins: [react()],
     base: '/tienda-pokemon/', // nombre de tu repositorio
   })
   ```

2. **Crear repositorio en GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/tienda-pokemon.git
   git push -u origin main
   ```

3. **Configurar GitHub Actions para deploy automático:**
   
   Crea `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             
         - name: Install dependencies
           run: npm install
           
         - name: Build
           run: npm run build
           
         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

4. **Activar GitHub Pages:**
   - Ve a Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / root
   - Save

   Tu sitio estará en: `https://TU_USUARIO.github.io/tienda-pokemon/`

---

**Backend - 3 Opciones Gratuitas:**

### Opción 1: Render.com (Recomendado - Más Fácil)

1. **Preparar backend para Render:**
   
   Crea `backend/render.yaml`:
   ```yaml
   services:
     - type: web
       name: pokemon-api
       env: node
       buildCommand: npm install && npm run build
       startCommand: npm start
       envVars:
         - key: NODE_ENV
           value: production
   ```

2. **Deploy:**
   - Ve a [render.com](https://render.com)
   - Conecta tu repositorio de GitHub
   - Selecciona "New Web Service"
   - Root Directory: `backend`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Plan: **Free**
   
   URL: `https://pokemon-api-xxxx.onrender.com`

### Opción 2: Railway.app (Muy Rápido)

1. Ve a [Railway.app](https://railway.app)
2. "New Project" → "Deploy from GitHub repo"
3. Selecciona tu repositorio
4. Root Directory: `backend`
5. Railway auto-detecta Node.js
6. Variables de entorno:
   ```
   NODE_ENV=production
   ```
7. Deploy automático

   URL: `https://tu-proyecto.up.railway.app`

### Opción 3: Vercel (Solo para API Routes)

Para backend más simple con Vercel Serverless:

1. Instala Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Crea `backend/vercel.json`:
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "src/index.ts",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "src/index.ts"
       }
     ]
   }
   ```

3. Deploy:
   ```bash
   cd backend
   vercel
   ```

---

**Conectar Frontend con Backend:**

Crea `src/config/api.ts`:
```typescript
export const API_URL = import.meta.env.PROD 
  ? 'https://tu-backend.onrender.com/api'  // URL de producción
  : 'http://localhost:3000/api';           // Desarrollo local
```

Úsalo en tu código:
```typescript
import { API_URL } from './config/api';

// Ejemplo: fetch cartas
const response = await fetch(`${API_URL}/cards`);
```

**Configurar CORS en backend:**

Actualiza `backend/src/index.ts`:
```typescript
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://TU_USUARIO.github.io'
  ],
  credentials: true
}));
```

## 🗄️ Base de Datos (Opcional - Producción)

Para producción, considera usar una base de datos real:

### MongoDB Atlas (Gratuito)

1. Crea cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Crea un cluster gratuito
3. Obtén la connection string
4. Instala mongoose:
   ```bash
   cd backend
   npm install mongoose
   ```
5. Actualiza `.env`:
   ```
   MONGODB_URI=tu_connection_string
   ```

### MySQL (Hostinger incluye MySQL)

1. Crea base de datos en cPanel
2. Instala mysql2:
   ```bash
   npm install mysql2
   ```
3. Configura conexión en `.env`:
   ```
   DB_HOST=localhost
   DB_USER=tu_usuario
   DB_PASSWORD=tu_password
   DB_NAME=tu_base_datos
   ```

## 📝 Scripts Disponibles

### Frontend
- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build para producción
- `npm run preview` - Preview del build

### Backend
- `npm run dev` - Servidor de desarrollo con hot-reload
- `npm run build` - Compilar TypeScript
- `npm start` - Iniciar servidor compilado

## 🔧 Tecnologías Utilizadas

### Frontend
- React 18
- TypeScript
- Vite
- TailwindCSS
- Lucide React (iconos)

### Backend
- Node.js
- Express
- TypeScript
- CORS
- dotenv

## 📄 Licencia

MIT

import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
