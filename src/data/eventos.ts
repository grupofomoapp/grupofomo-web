// Club y fiestas de Grupo FOMO. Para añadir una fiesta, añade un objeto a `fiestas`
// y su foto en public/img/. Cada uno tiene su página en /<slug>.
export interface Evento {
  id: string;
  slug: string;
  nombre: string;
  texto: string;
  descripcion: string;
  foto: string;
  logo: string;
  meta?: string[];
  entradas: string;
  lugar: string;
  mapa: string;
  web?: string;
  // Botones de redes sociales; con `info: false` se quita el botón "Info + eventos"
  redes?: Red[];
  info?: boolean;
}

export interface Red {
  nombre: 'Instagram' | 'Facebook' | 'TikTok';
  url: string;
}

export const club: Evento = {
  id: 'mirablau',
  slug: 'mirablau-club',
  nombre: 'Mirablau Club',
  texto: 'Puesta en marcha y gestión del club del restaurante Mirablau: redes sociales, comunicación y ticketing.',
  descripcion: 'Mirablau, el restaurante mítico de Barcelona, se convierte a partir de medianoche en un club con las mejores vistas de la ciudad.',
  foto: '/img/mirablau-club.webp',
  logo: '/img/logos/mirablau-club.png',
  meta: ['Barcelona'],
  entradas: 'https://www.fourvenues.com/mirablau-club',
  info: false,
  redes: [
    { nombre: 'Instagram', url: 'https://www.instagram.com/mirablau_club/' },
    { nombre: 'Facebook', url: 'https://www.facebook.com/mirablauclub' },
  ],
  lugar: 'Mirablau',
  mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.0677574014403!2d2.1293091764409!3d41.41604779421637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4981b8e7d21db%3A0x906895d755a11f40!2sMirablau!5e0!3m2!1ses!2ses!4v1762817787585!5m2!1ses!2ses',
};

export const fiestas: Evento[] = [
  {
    id: 'la-rumba',
    slug: 'la-rumba-barcelona',
    nombre: 'La Rumba Barcelona',
    texto: 'Fiestas de rumba con los mejores artistas, copas y buen rollo en Barcelona.',
    descripcion: 'Desde 2022 traemos a los artistas de rumba más reconocidos de la ciudad. Pop español, rumba y flamenco fusión en cada evento, con copas y buen rollo.',
    foto: '/img/la-rumba.webp',
    logo: '/img/logos/la-rumba.png',
    meta: ['Desde 2022', 'Barcelona'],
    entradas: 'https://www.fourvenues.com/la-rumba-barcelona',
    info: false,
    redes: [
      { nombre: 'Instagram', url: 'https://www.instagram.com/larumbabarcelona/' },
      { nombre: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61568610029684' },
    ],
    lugar: 'El Cuatro Barcelona',
    mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5986.166275589334!2d2.1359119510682105!3d41.39400083090339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a499b8b55bda5d%3A0x587bf7230e3f72a4!2sEl%20Cuatro%20Barcelona!5e0!3m2!1ses!2ses!4v1762820180600!5m2!1ses!2ses',
  },
  {
    id: 'tarde-tonta',
    slug: 'una-tarde-tonta',
    nombre: 'Una Tarde Tonta',
    texto: 'Fiestas de tarde para mayores de 14 años, las únicas de su tipo en Barcelona.',
    descripcion: 'Desde 2024 llevamos el ocio al público más joven con una fiesta de tarde para mayores de 14 años, la única de este tipo en Barcelona.',
    foto: '/img/una-tarde-tonta.webp',
    logo: '/img/logos/una-tarde-tonta.png',
    meta: ['Desde 2024', '+14', 'Barcelona'],
    entradas: 'https://www.fourvenues.com/una-tarde-tonta',
    redes: [{ nombre: 'Instagram', url: 'https://www.instagram.com/unatardetonta/' }],
    lugar: 'La Fira Villarroel Barcelona',
    mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.1653564332037!2d2.145250376439959!3d41.3922151956951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a29cdc055f8b%3A0x2570c09032bc0e8a!2sLa%20Fira%20Villarroel%20Barcelona!5e0!3m2!1ses!2ses!4v1762820967303!5m2!1ses!2ses',
  },
  {
    id: 'noche-tonta',
    slug: 'una-noche-tonta',
    nombre: 'Una Noche Tonta',
    texto: 'Fiestas para mayores de 16 años en Barcelona, la Cerdanya y la Costa Brava.',
    descripcion: 'Desde sus inicios en 2016 se ha convertido en la fiesta de referencia para mayores de 16 años en Barcelona, la Cerdanya y la Costa Brava.',
    foto: '/img/una-noche-tonta.webp',
    logo: '/img/logos/una-noche-tonta.png',
    meta: ['Desde 2016', '+16', 'Barcelona', 'Cerdanya', 'Costa Brava'],
    entradas: 'https://www.fourvenues.com/una-noche-tonta',
    info: false,
    redes: [
      { nombre: 'Instagram', url: 'https://www.instagram.com/unanochetonta/' },
      { nombre: 'TikTok', url: 'https://www.tiktok.com/@unanochetonta' },
    ],
    lugar: 'Bikini Barcelona',
    mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.2708572838587!2d2.1319055895364665!3d41.389923821846416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4987ac063df73%3A0xca99954414d8c7fd!2sBikini%20Barcelona!5e0!3m2!1ses!2ses!4v1762820620222!5m2!1ses!2ses',
  },
];

export const eventos: Evento[] = [club, ...fiestas];

// Otros proyectos de Grupo FOMO con web propia (sin página aquí).
export const graduacions: Evento = {
  id: 'graduacions',
  slug: 'graduacions',
  nombre: 'Graduacions.cat',
  texto: 'Fiestas de graduación para ESO, Bachillerato y universidad en Barcelona, Girona, Lleida y Tarragona, con cena, DJ, fotografía y aftermovie.',
  descripcion: '',
  foto: '/img/graduacions.webp',
  logo: '/img/logos/graduacions.svg',
  meta: ['+8 años', '+100 graduaciones', 'Cataluña'],
  entradas: '',
  lugar: '',
  mapa: '',
  web: 'https://www.graduacions.cat/',
  redes: [
    { nombre: 'Instagram', url: 'https://www.instagram.com/graduacions.cat/' },
    { nombre: 'Facebook', url: 'https://www.facebook.com/graduacions.cat' },
  ],
};

// Otras marcas de Grupo FOMO (ya finalizadas): logo, años, descripción y Facebook, sin página propia.
export interface Marca {
  id: string;
  nombre: string;
  logo?: string;
  meta: string[];
  texto: string;
  facebook?: string;
}

const listaMarcas: Marca[] = [
  {
    id: 'music-club',
    nombre: 'Music Club',
    logo: '/img/logos/music-club.png',
    meta: ['2010–2012', '+16', 'Barcelona'],
    texto: 'Gestión de una sala con fiestas para mayores de 16 años en la calle Villarroel de Barcelona.',
  },
  {
    id: 'seven-crowns',
    nombre: 'Seven Crowns',
    logo: '/img/logos/seven-crowns.png',
    meta: ['2010', '+16', 'Barcelona'],
    texto: 'Fiestas para mayores de 16 años en la sala Seven Crowns de Barcelona.',
  },
  {
    id: 'vetro',
    nombre: 'Vetro',
    logo: '/img/logos/vetro.png',
    meta: ['2012', 'Barcelona'],
    texto: 'Promoción de los eventos de la mítica sala Vetro de Barcelona.',
    facebook: 'https://www.facebook.com/vetrobcn',
  },
  {
    id: 'el-cielo',
    nombre: 'El Cielo de Up&Down',
    logo: '/img/logos/el-cielo.png',
    meta: ['2012', '+16', 'Barcelona'],
    texto: 'Fiestas para mayores de 16 años en Up&Down Barcelona.',
  },
  {
    id: 'la-previa',
    nombre: 'La Previa',
    logo: '/img/logos/la-previa.png',
    meta: ['2018–2022', 'Barcelona'],
    texto: 'Primeras copas con música en SOHO, Bubblic Bar y Patrón.',
    facebook: 'https://www.facebook.com/lapreviabarcelona',
  },
  {
    id: 'la-burrada',
    nombre: 'La Burrada',
    logo: '/img/logos/la-burrada.png',
    meta: ['2021–2025', 'Barcelona'],
    texto: 'Fiestas universitarias en Input, Otto y Malalts de Festa.',
    facebook: 'https://www.facebook.com/profile.php?id=61574677543987',
  },
  {
    id: 'la-resaca',
    nombre: 'La Resaca',
    logo: '/img/logos/la-resaca.png',
    meta: ['2018–2023', 'Barcelona', 'Costa Brava'],
    texto: "Tardeos de domingo en Café del Mar Barcelona, Pacha Barcelona y Papillon Platja d'Aro.",
    facebook: 'https://www.facebook.com/laresacacostabrava',
  },
  {
    id: 'fomo-by-sutton',
    nombre: 'FOMO by Sutton',
    logo: '/img/logos/fomo.png',
    meta: ['2022–2024', 'Barcelona'],
    texto: 'Fiestas de los jueves en Sutton Barcelona.',
    facebook: 'https://www.facebook.com/fomobysutton',
  },
  {
    id: 'pacha-cha',
    nombre: 'Pacha Chá',
    logo: '/img/logos/pacha-cha.png',
    meta: ['2018–2019', 'Barcelona'],
    texto: 'Fiestas universitarias de los jueves en Pacha Barcelona.',
    facebook: 'https://www.facebook.com/pachachabarcelona',
  },
];

// Ordenadas de la más reciente a la más antigua: primero el año de fin y, si coincide, el de inicio
const anyosDe = (m: Marca) => (m.meta.join(' ').match(/\b(?:19|20)\d{2}\b/g) ?? ['0']).map(Number);
export const marcas = [...listaMarcas].sort((a, b) => {
  const [ia, fa = ia] = anyosDe(a);
  const [ib, fb = ib] = anyosDe(b);
  return fb - fa || ib - ia;
});

// Años de experiencia: desde el año más antiguo que aparece en las tarjetitas de la web
// (fiestas, club, graduaciones y marcas). Se recalcula en cada publicación.
const anyos = [...eventos, graduacions, ...marcas]
  .flatMap((e) => e.meta ?? [])
  .flatMap((t) => t.match(/\b(?:19|20)\d{2}\b/g) ?? [])
  .map(Number);
export const primerAnyo = Math.min(...anyos);
export const anyosExperiencia = new Date().getFullYear() - primerAnyo;
