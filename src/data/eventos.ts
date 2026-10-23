// Club y fiestas de Grupo FOMO. Para añadir una fiesta, añade un objeto a `fiestas`
// y su foto en public/img/.
export interface Evento {
  id: string;
  nombre: string;
  texto: string;
  foto: string;
  meta?: string[];
  enlace: string;
}

export const club: Evento = {
  id: 'mirablau',
  nombre: 'Mirablau Club',
  texto: 'Pasada la medianoche, el restaurante Mirablau se convierte en un club con las mejores vistas de la ciudad.',
  foto: '/img/mirablau-club.webp',
  enlace: 'https://tkpnb0-ng.myshopify.com/pages/mirablau-club',
};

export const fiestas: Evento[] = [
  {
    id: 'la-rumba',
    nombre: 'La Rumba Barcelona',
    texto: 'Traemos a los mejores artistas de rumba en eventos donde se juntan música, copas y buen rollo.',
    foto: '/img/la-rumba.webp',
    meta: ['Desde 2022', 'Barcelona'],
    enlace: 'https://tkpnb0-ng.myshopify.com/pages/la-rumba-barcelona',
  },
  {
    id: 'noche-tonta',
    nombre: 'Una Noche Tonta',
    texto: 'La fiesta para mayores de 16 años, en Barcelona, la Cerdanya y la Costa Brava.',
    foto: '/img/una-noche-tonta.webp',
    meta: ['Desde 2016', '+16', 'Barcelona · Cerdanya · Costa Brava'],
    enlace: 'https://tkpnb0-ng.myshopify.com/pages/una-noche-tonta',
  },
  {
    id: 'tarde-tonta',
    nombre: 'Una Tarde Tonta',
    texto: 'La fiesta de tarde para mayores de 14 años. La única de su tipo en Barcelona.',
    foto: '/img/una-tarde-tonta.webp',
    meta: ['Desde 2024', '+14', 'Barcelona'],
    enlace: 'https://tkpnb0-ng.myshopify.com/pages/una-tarde-tonta',
  },
];
