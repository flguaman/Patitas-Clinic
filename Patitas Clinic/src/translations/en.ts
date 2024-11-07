import { Translation } from '../types';

export const en: Translation = {
  nav: {
    home: 'Home',
    services: 'Services',
    contact: 'Contact',
  },
  home: {
    hero: {
      title: 'Welcome to Patitas Clinic',
      subtitle: 'Professional veterinary care for your beloved pets',
    },
    services: {
      title: 'Our Services',
      items: [
        {
          title: 'Preventive Care',
          description: 'Regular check-ups and vaccinations',
        },
        {
          title: 'Surgery',
          description: 'Advanced surgical procedures',
        },
        {
          title: 'Emergency Care',
          description: '24/7 emergency services',
        },
      ],
    },
  },
  services: {
    title: 'Our Services',
    description: 'Comprehensive veterinary care for all your pet needs',
  },
  contact: {
    title: 'Contact Us',
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send',
    },
  },
};
