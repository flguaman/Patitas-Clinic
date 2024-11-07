import React from 'react';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';

function App() {
  const path = window.location.pathname;

  switch (path) {
    case '/services':
      return <Services />;
    case '/contact':
      return <Contact />;
    default:
      return <Home />;
  }
}

export default App;