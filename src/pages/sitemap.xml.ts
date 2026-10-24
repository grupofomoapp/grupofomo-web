import type { APIRoute } from 'astro';
import { eventos } from '../data/eventos';

// Sitemap para Google Search Console: portada + subpáginas de cada evento
export const GET: APIRoute = ({ site }) => {
  const rutas = ['/', ...eventos.map((e) => `/${e.slug}`)];
  const urls = rutas.map((r) => `  <url><loc>${new URL(r, site)}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
