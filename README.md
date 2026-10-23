# Grupo FOMO · web

Web de GRUPO FOMO, S.L. hecha con [Astro](https://astro.build) (páginas estáticas). Se publica en Vercel: cada cambio en la rama `main` se publica solo.

## Estructura

- `src/pages/index.astro`: portada.
- `src/data/eventos.ts`: el club y las fiestas (nombre, texto, foto, datos y enlace). Para añadir una fiesta, añade un objeto y su foto en `public/img/`.
- `src/components/EventoFeature.astro`: bloque de foto y texto de cada club o fiesta.
- `src/components/Logo.astro`: logo en SVG (toma el color del texto).
- `src/layouts/Base.astro`: barra superior, menú y pie comunes a todas las páginas.
- `src/styles/global.css`: estilos.
- `public/`: imágenes y archivos que se sirven tal cual.

## Pendiente

- Conectar el formulario de newsletter.
- Páginas legales (aviso legal, privacidad, cookies).
- Los botones "Info + eventos" apuntan a la tienda de Shopify.

## Trabajar en local

```
npm install
npm run dev
```

Todos los cambios se hacen a través de Claude.
