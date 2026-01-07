# 🚀 Guía Rápida de Deploy en GitHub

## Pasos para Deploy Completo GRATIS

### 1️⃣ Frontend en GitHub Pages

**Paso 1: Crear repositorio en GitHub**
```bash
cd /Users/alejandro/sitios/tienda-pokemon
git init
git add .
git commit -m "Initial commit: Tienda Pokemon"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/tienda-pokemon.git
git push -u origin main
```

**Paso 2: Activar GitHub Pages**
1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: "GitHub Actions"
4. El workflow `.github/workflows/deploy.yml` ya está configurado
5. Cada push a `main` desplegará automáticamente

**Tu sitio estará en:** `https://TU_USUARIO.github.io/tienda-pokemon/`

---

### 2️⃣ Backend en Render.com (GRATIS)

**Paso 1: Crear cuenta en Render**
- Ve a [render.com](https://render.com)
- Sign up con GitHub

**Paso 2: Crear Web Service**
1. Click "New +" → "Web Service"
2. Conecta tu repositorio `tienda-pokemon`
3. Configuración:
   - **Name:** `pokemon-api`
   - **Region:** Oregon (US West)
   - **Branch:** `main`
   - **Root Directory:** `backend`
   - **Runtime:** Node
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Plan:** Free

4. Variables de entorno (Environment):
   ```
   NODE_ENV=production
   ```

5. Click "Create Web Service"

**Tu API estará en:** `https://pokemon-api-xxxx.onrender.com`

---

### 3️⃣ Conectar Frontend con Backend

**Actualizar URL del backend:**

En `src/config/api.ts`, cambia:
```typescript
export const API_URL = isDevelopment
  ? 'http://localhost:3000/api'
  : 'https://pokemon-api-xxxx.onrender.com/api'; // 👈 Tu URL de Render
```

**Actualizar CORS en backend:**

En `backend/src/index.ts`, asegúrate de tener:
```typescript
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://TU_USUARIO.github.io' // 👈 Tu dominio de GitHub Pages
  ],
  credentials: true
}));
```

Haz commit y push:
```bash
git add .
git commit -m "Update API URL and CORS"
git push
```

---

## ✅ Verificación

1. **Frontend:** `https://TU_USUARIO.github.io/tienda-pokemon/`
2. **Backend Health Check:** `https://pokemon-api-xxxx.onrender.com/health`
3. **API Cards:** `https://pokemon-api-xxxx.onrender.com/api/cards`

---

## 🔄 Workflow de Desarrollo

```bash
# Hacer cambios
git add .
git commit -m "Descripción de cambios"
git push

# GitHub Actions desplegará automáticamente el frontend
# Render desplegará automáticamente el backend
```

---

## ⚠️ Notas Importantes

**Render Free Tier:**
- ✅ GRATIS permanentemente
- ⚠️ El servicio entra en "sleep" después de 15 min de inactividad
- ⏱️ Primera petición después de sleep tarda ~30-50 segundos
- 💡 Solución: Usar un servicio de "keep alive" o actualizar a plan pagado ($7/mes)

**GitHub Pages:**
- ✅ GRATIS e ilimitado
- ✅ CDN global rápido
- ✅ HTTPS automático

---

## 🎯 Alternativas al Backend

Si Render es muy lento:

### Railway.app
```bash
# Instalar Railway CLI
npm i -g @railway/cli

# Login y deploy
railway login
railway init
railway up
```

### Vercel (Serverless)
```bash
npm i -g vercel
cd backend
vercel
```

---

## 📞 Soporte

Si tienes problemas:
1. Revisa los logs en Render Dashboard
2. Verifica GitHub Actions en tu repositorio
3. Prueba el health check del backend
