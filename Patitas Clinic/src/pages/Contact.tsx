import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { useStore } from '../store/useStore';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const { translations } = useStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Layout currentPage="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            {translations.contact.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {translations.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {translations.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {translations.contact.form.message}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Send className="h-4 w-4 mr-2" />
                {translations.contact.form.submit}
              </button>
            </form>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="space-y-8">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-indigo-500" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Dirección
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Av. Principal 123, Ciudad
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="h-6 w-6 text-indigo-500" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Teléfono
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">+1 234 567 890</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="h-6 w-6 text-indigo-500" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    contacto@petcareclinic.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};