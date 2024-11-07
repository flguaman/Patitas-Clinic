import React from 'react';
import { Layout } from '../components/Layout';
import { useStore } from '../store/useStore';
import { Stethoscope, Syringe, Phone, PawPrint, Microscope, Pill } from 'lucide-react';

export const Services: React.FC = () => {
  const { translations } = useStore();

  const services = [
    {
      icon: <Stethoscope className="h-8 w-8 text-indigo-500" />,
      title: 'Exámenes Generales',
      description: 'Chequeos completos y diagnósticos precisos',
    },
    {
      icon: <Syringe className="h-8 w-8 text-indigo-500" />,
      title: 'Vacunación',
      description: 'Programa completo de vacunación preventiva',
    },
    {
      icon: <PawPrint className="h-8 w-8 text-indigo-500" />,
      title: 'Cirugía',
      description: 'Procedimientos quirúrgicos avanzados',
    },
    {
      icon: <Phone className="h-8 w-8 text-indigo-500" />,
      title: 'Emergencias 24/7',
      description: 'Atención de emergencia disponible todo el día',
    },
    {
      icon: <Microscope className="h-8 w-8 text-indigo-500" />,
      title: 'Laboratorio',
      description: 'Análisis clínicos y diagnósticos',
    },
    {
      icon: <Pill className="h-8 w-8 text-indigo-500" />,
      title: 'Farmacia',
      description: 'Medicamentos y suplementos veterinarios',
    },
  ];

  return (
    <Layout currentPage="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {translations.services.title}
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            {translations.services.description}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105"
            >
              <div className="absolute top-0 -mt-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-400 text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};