# Grupo FOMO · web

Web de GRUPO FOMO, S.L. hecha con [Astro](https://astro.build) (páginas estáticas). Se publica en Vercel: cada cambio en la rama `main` se publica solo.

## Estructura

- `src/pages/index.astro`: portada.
- `src/pages/[slug].astro`: página de cada club o fiesta (foto, texto, entradas en Fourvenues y mapa del local).
- `src/data/eventos.ts`: el club y las fiestas (nombre, textos, foto, datos, enlace de entradas, local y mapa). Para añadir una fiesta, añade un objeto y su foto en `public/img/`.
- `src/components/EventoFeature.astro`: bloque de foto y texto de cada club o fiesta en la portada.
- `src/components/Newsletter.astro`: bloque de newsletter.
- `src/components/Logo.astro`: logo en SVG (toma el color del texto).
- `src/layouts/Base.astro`: barra superior, menú y pie comunes a todas las páginas.
- `src/styles/global.css`: estilos.
- `public/`: imágenes y archivos que se sirven tal cual.

## Pendiente

- Conectar el formulario de newsletter.
- Páginas legales (aviso legal, privacidad, cookies).
- Fechas de próximos eventos y flyers de eventos anteriores en cada página.

## Trabajar en local

```
npm install
npm run dev
```

Todos los cambios se hacen a través de Claude.
