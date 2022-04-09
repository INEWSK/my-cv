import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Content } from './components/Content';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

export const App = () => {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Content */}
      <Content />

      {/* Footer */}
      <Footer />
    </div>
  );
};
