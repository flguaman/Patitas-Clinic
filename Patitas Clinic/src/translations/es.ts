import { Translation } from '../types';

export const es: Translation = {
  nav: {
    home: 'Inicio',
    services: 'Servicios',
    contact: 'Contacto',
  },
  home: {
    hero: {
      title: 'Bienvenido a  Clínica Patitas ',
      subtitle: 'Cuidado veterinario profesional para tus mascotas',
    },
    services: {
      title: 'Nuestros Servicios',
      items: [
        {
          title: 'Cuidado Preventivo',
          description: 'Chequeos regulares y vacunaciones',
        },
        {
          title: 'Cirugía',
          description: 'Procedimientos quirúrgicos avanzados',
        },
        {
          title: 'Atención de Emergencia',
          description: 'Servicios de emergencia 24/7',
        },
      ],
    },
  },
  services: {
    title: 'Nuestros Servicios',
    description:
      'Atención veterinaria integral para todas las necesidades de tu mascota',
  },
  contact: {
    title: 'Contáctanos',
    form: {
      name: 'Nombre',
      email: 'Correo',
      message: 'Mensaje',
      submit: 'Enviar',
    },
  },
};
