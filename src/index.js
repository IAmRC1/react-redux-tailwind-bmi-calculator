import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './redux/store.js'
import './styles/tailwind.output.css';
import './styles/_custom.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
