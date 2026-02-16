// Configuración de producción
// Vercel reemplazará estos valores durante el build usando variables de entorno

declare const process: any;

export const environment = {
  production: true,
  supabase: {
    // @ts-ignore - Variables inyectadas por Vercel en build time
    url: typeof process !== 'undefined' ? (process.env['NG_APP_SUPABASE_URL'] || '') : '',
    // @ts-ignore - Variables inyectadas por Vercel en build time
    anonKey: typeof process !== 'undefined' ? (process.env['NG_APP_SUPABASE_ANON_KEY'] || '') : ''
  }
};
