export interface Translation {
  nav: {
    home: string;
    services: string;
    contact: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
    };
    services: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
  };
  services: {
    title: string;
    description: string;
  };
  contact: {
    title: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
  };
}