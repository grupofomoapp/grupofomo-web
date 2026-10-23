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
}

export const club: Evento = {
  id: 'mirablau',
  slug: 'mirablau-club',
  nombre: 'Mirablau Club',
  texto: 'Pasada la medianoche, el restaurante Mirablau se convierte en un club con las mejores vistas de la ciudad.',
  descripcion: 'Mirablau, el restaurante mítico de Barcelona, se convierte a partir de medianoche en un club con las mejores vistas de la ciudad.',
  foto: '/img/mirablau-club.webp',
  logo: '/img/logos/mirablau-club.png',
  entradas: 'https://www.fourvenues.com/mirablau-club',
  lugar: 'Mirablau',
  mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.0677574014403!2d2.1293091764409!3d41.41604779421637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4981b8e7d21db%3A0x906895d755a11f40!2sMirablau!5e0!3m2!1ses!2ses!4v1762817787585!5m2!1ses!2ses',
};

export const fiestas: Evento[] = [
  {
    id: 'la-rumba',
    slug: 'la-rumba-barcelona',
    nombre: 'La Rumba Barcelona',
    texto: 'Traemos a los mejores artistas de rumba en eventos donde se juntan música, copas y buen rollo.',
    descripcion: 'Desde 2022 traemos a los artistas de rumba más reconocidos de la ciudad. Pop español, rumba y flamenco fusión en cada evento, con copas y buen rollo.',
    foto: '/img/la-rumba.webp',
    logo: '/img/logos/la-rumba.png',
    meta: ['Desde 2022', 'Barcelona'],
    entradas: 'https://www.fourvenues.com/la-rumba-barcelona',
    lugar: 'El Cuatro Barcelona',
    mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5986.166275589334!2d2.1359119510682105!3d41.39400083090339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a499b8b55bda5d%3A0x587bf7230e3f72a4!2sEl%20Cuatro%20Barcelona!5e0!3m2!1ses!2ses!4v1762820180600!5m2!1ses!2ses',
  },
  {
    id: 'noche-tonta',
    slug: 'una-noche-tonta',
    nombre: 'Una Noche Tonta',
    texto: 'La fiesta para mayores de 16 años, en Barcelona, la Cerdanya y la Costa Brava.',
    descripcion: 'Desde sus inicios en 2016 se ha convertido en la fiesta de referencia para mayores de 16 años en Barcelona, la Cerdanya y la Costa Brava.',
    foto: '/img/una-noche-tonta.webp',
    logo: '/img/logos/una-noche-tonta.png',
    meta: ['Desde 2016', '+16', 'Barcelona · Cerdanya · Costa Brava'],
    entradas: 'https://www.fourvenues.com/una-noche-tonta',
    lugar: 'Bikini Barcelona',
    mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.2708572838587!2d2.1319055895364665!3d41.389923821846416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4987ac063df73%3A0xca99954414d8c7fd!2sBikini%20Barcelona!5e0!3m2!1ses!2ses!4v1762820620222!5m2!1ses!2ses',
  },
  {
    id: 'tarde-tonta',
    slug: 'una-tarde-tonta',
    nombre: 'Una Tarde Tonta',
    texto: 'La fiesta de tarde para mayores de 14 años. La única de su tipo en Barcelona.',
    descripcion: 'Desde 2024 llevamos el ocio al público más joven con una fiesta de tarde para mayores de 14 años, la única de este tipo en Barcelona.',
    foto: '/img/una-tarde-tonta.webp',
    logo: '/img/logos/una-tarde-tonta.png',
    meta: ['Desde 2024', '+14', 'Barcelona'],
    entradas: 'https://www.fourvenues.com/una-tarde-tonta',
    lugar: 'La Fira Villarroel Barcelona',
    mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.1653564332037!2d2.145250376439959!3d41.3922151956951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a29cdc055f8b%3A0x2570c09032bc0e8a!2sLa%20Fira%20Villarroel%20Barcelona!5e0!3m2!1ses!2ses!4v1762820967303!5m2!1ses!2ses',
  },
];

export const eventos: Evento[] = [club, ...fiestas];

// Otros proyectos de Grupo FOMO con web propia (sin página aquí).
export const graduacions: Evento = {
  id: 'graduacions',
  slug: 'graduacions',
  nombre: 'Graduacions.cat',
  texto: 'Organizamos fiestas de graduación para estudiantes de ESO, Bachillerato y universidad en Barcelona, Girona, Lleida y Tarragona: cena, fiesta, DJ, fotografía y aftermovie.',
  descripcion: '',
  foto: '/img/graduacions.webp',
  logo: '/img/logos/graduacions.svg',
  meta: ['+8 años', '+100 graduaciones', 'Cataluña'],
  entradas: '',
  lugar: '',
  mapa: '',
  web: 'https://www.graduacions.cat/',
};
