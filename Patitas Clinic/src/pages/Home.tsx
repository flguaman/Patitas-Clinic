import React from 'react';
import { Layout } from '../components/Layout';
import { useStore } from '../store/useStore';
import { Stethoscope, Syringe, Phone } from 'lucide-react';

export const Home: React.FC = () => {
  const { translations } = useStore();

  return (
    <Layout currentPage="home">
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[600px] object-cover"
            src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80"
            alt="Veterinary clinic"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {translations.home.hero.title}
          </h1>
          <p className="mt-6 text-xl text-gray-100 max-w-3xl">
            {translations.home.hero.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          {translations.home.services.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {translations.home.services.items.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105"
            >
              {index === 0 && <Stethoscope className="h-12 w-12 text-indigo-500 mb-4" />}
              {index === 1 && <Syringe className="h-12 w-12 text-indigo-500 mb-4" />}
              {index === 2 && <Phone className="h-12 w-12 text-indigo-500 mb-4" />}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};