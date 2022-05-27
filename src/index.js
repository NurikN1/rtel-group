import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import { HashRouter } from 'react-router-dom';
import 'mapbox-gl/dist/mapbox-gl.css';

import './index.css';
import 'swiper/css/bundle';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
