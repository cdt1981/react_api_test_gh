import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Sentencias from './components/Sentencias';
import Liquidaciones from './components/Liquidaciones';
import Modelos from './components/Modelos';
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

