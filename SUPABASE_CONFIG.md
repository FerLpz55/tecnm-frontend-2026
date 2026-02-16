# Configuración de Supabase

## 📋 Pasos para conectar Supabase

### 1. Crear Proyecto en Supabase
1. Ve a [supabase.com](https://supabase.com)
2. Crea un nuevo proyecto
3. Copia las credenciales:
   - Project URL
   - Anon Public Key

### 2. Configurar Tablas

Ejecuta este SQL en Supabase SQL Editor:

```sql
-- Tabla de Equipos
CREATE TABLE equipos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre_equipo TEXT NOT NULL,
  sede TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Tabla de Participantes
CREATE TABLE participantes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  equipo_id UUID NOT NULL REFERENCES equipos(id) ON DELETE CASCADE,
  nombre_completo TEXT NOT NULL,
  correo TEXT NOT NULL,
  matricula TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Índices para mejor rendimiento
CREATE INDEX idx_participantes_equipo_id ON participantes(equipo_id);

-- Habilitar Row Level Security (RLS)
ALTER TABLE equipos ENABLE ROW LEVEL SECURITY;
ALTER TABLE participantes ENABLE ROW LEVEL SECURITY;

-- Políticas: Permitir INSERT y SELECT para todos
CREATE POLICY "Permitir insertar equipos" ON equipos
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Permitir leer equipos" ON equipos
  FOR SELECT USING (true);

CREATE POLICY "Permitir insertar participantes" ON participantes
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Permitir leer participantes" ON participantes
  FOR SELECT USING (true);
```

### 3. Configurar Variables de Entorno

**🔒 IMPORTANTE:** Las credenciales ahora se configuran de forma segura usando variables de entorno.

#### Para desarrollo local (opcional):
1. Copia el archivo `.env.example` a `.env`:
   ```bash
   cp .env.example .env
   ```
2. Edita `.env` y agrega tus credenciales:
   ```
   NG_APP_SUPABASE_URL=https://TUPROYECTO.supabase.co
   NG_APP_SUPABASE_ANON_KEY=TU_ANON_KEY_AQUI
   ```

#### Para producción en Vercel:
Las credenciales se configuran directamente en Vercel. Ver: [DEPLOY_VERCEL.md](DEPLOY_VERCEL.md)

**⚠️ NUNCA** subas el archivo `.env` a GitHub (ya está en .gitignore)

### 4. Verificar

1. Compila el proyecto: `npm run build`
2. Ejecuta: `ng serve`
3. Prueba el formulario de registro
4. Verifica en Supabase → Table Editor que se crearon los registros

## ✅ Listo

El proyecto está 100% funcional con:
- ✅ Variables de entorno seguras
- ✅ Integración con Supabase
- ✅ Listo para deploy en Vercel

📖 **Siguiente paso:** Ver [DEPLOY_VERCEL.md](DEPLOY_VERCEL.md) para publicar tu sitio
