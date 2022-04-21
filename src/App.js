import { Header } from './layouts/Header';
import { Footer } from './layouts/Footer';
import { Content } from './layouts/Content';

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
