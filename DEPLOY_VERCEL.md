# 🚀 Deploy en Vercel - Laguna Hack 2026

## 📋 Requisitos Previos
- Cuenta de GitHub (con tu repositorio ya subido)
- Cuenta de Vercel (crear en: https://vercel.com/signup)
- Credenciales de Supabase listas

---

## 🔐 Paso 1: Preparar tus credenciales de Supabase

1. Ve a tu proyecto en Supabase: https://app.supabase.com
2. En el panel izquierdo, haz clic en **Settings** ⚙️
3. En **API**, copia:
   - `Project URL` (algo como: https://xxxxx.supabase.co)
   - `anon/public key` (una clave larga que empieza con `eyJ...`)

**⚠️ IMPORTANTE:** NO subas estas credenciales a GitHub

---

## 🌐 Paso 2: Deploy en Vercel

### Opción A: Desde la Web (Más fácil)

1. **Ir a Vercel**
   - Entra a: https://vercel.com
   - Haz clic en **"Add New Project"**

2. **Conectar GitHub**
   - Haz clic en **"Import Git Repository"**
   - Autoriza a Vercel para acceder a tu GitHub
   - Selecciona tu repositorio: `tecnm-frontend-2026`

3. **Configurar el Proyecto**
   - Framework Preset: **Angular** (debe detectarse automáticamente)
   - Build Command: `npm run build` (ya configurado)
   - Output Directory: `dist/laguna-hack-frontend/browser` (ya configurado)

4. **⚠️ PASO CRÍTICO: Agregar Variables de Entorno**
   - Antes de hacer deploy, haz clic en **"Environment Variables"**
   - Agrega las siguientes variables:

   ```
   Nombre: NG_APP_SUPABASE_URL
   Valor: https://tu-proyecto.supabase.co
   ```

   ```
   Nombre: NG_APP_SUPABASE_ANON_KEY
   Valor: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (tu clave completa)
   ```

5. **Deploy**
   - Haz clic en **"Deploy"**
   - Espera 2-3 minutos ⏳
   - ¡Listo! 🎉

---

### Opción B: Desde la Terminal (Más rápido)

1. **Instalar Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login en Vercel**
   ```bash
   vercel login
   ```

3. **Primer Deploy**
   ```bash
   vercel
   ```
   - Sigue las instrucciones (conectar GitHub, etc.)

4. **Agregar Variables de Entorno**
   ```bash
   vercel env add NG_APP_SUPABASE_URL
   # Pega tu URL de Supabase y presiona Enter

   vercel env add NG_APP_SUPABASE_ANON_KEY
   # Pega tu clave y presiona Enter
   ```

5. **Deploy a Producción**
   ```bash
   vercel --prod
   ```

---

## ✅ Verificar que Funciona

1. Abre la URL que te dio Vercel (ej: `https://tu-proyecto.vercel.app`)
2. Ve a la página de **Registro**
3. Abre la consola del navegador (F12)
4. Intenta registrar un equipo de prueba
5. Si no hay error de "Supabase no configurado", ¡funciona! ✅

---

## 🔄 Deploys Automáticos

**¡Ya está configurado!** Cada vez que hagas `git push`:
1. Vercel detecta el cambio
2. Build automático
3. Deploy automático
4. Nueva versión en vivo en 2-3 minutos

---

## 🛠️ Comandos Útiles

```bash
# Ver logs del último deploy
vercel logs

# Ver todas tus variables de entorno
vercel env ls

# Hacer rollback a una versión anterior
vercel rollback

# Abrir tu proyecto en Vercel
vercel open
```

---

## 🐛 Troubleshooting

### Error: "Supabase no configurado"
**Causa:** Variables de entorno no configuradas
**Solución:**
1. Ve a tu proyecto en Vercel → Settings → Environment Variables
2. Verifica que existan `NG_APP_SUPABASE_URL` y `NG_APP_SUPABASE_ANON_KEY`
3. Si las agregaste después del primer deploy, haz un nuevo deploy: `vercel --prod`

### Build falla
**Solución:**
```bash
# Prueba el build localmente primero
npm run build

# Si funciona local pero falla en Vercel, verifica la versión de Node
# Vercel usa Node 18+ por defecto
```

### Rutas no funcionan (404 en refresh)
**Solución:** El archivo `vercel.json` ya está configurado para manejar rutas de Angular

---

## 🎯 URLs Importantes

- **Dashboard de Vercel:** https://vercel.com/dashboard
- **Docs de Vercel:** https://vercel.com/docs
- **Configuración de Variables:** Settings → Environment Variables en tu proyecto

---

## 🔒 Seguridad

✅ **Qué está protegido:**
- Variables de entorno encriptadas
- HTTPS automático
- Credenciales no expuestas en el código

⚠️ **Recuerda:**
- NUNCA subas archivos `.env` a GitHub
- Las `anon keys` de Supabase son seguras para el frontend
- Configura Row Level Security (RLS) en Supabase para proteger datos

---

**¡Listo para el hackathon! 🚀**
