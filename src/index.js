import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
// import App from './components/App'
import { AppRouter } from './routers/AppRouter';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);

