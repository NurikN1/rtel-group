import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import 'swiper/css/bundle';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
