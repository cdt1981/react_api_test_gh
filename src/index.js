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

/* const router = createBrowserRouter([
  {
    path: "/react_api_test_gh/*",
    element: <App />,
  },
  {
    path: "/react_api_test_gh/sentencias",
    element: <Sentencias />,
  },
  {
    path: "/react_api_test_gh/modelos",
    element: <Modelos />,
  },
  {
    path: "/react_api_test_gh/liquidaciones",
    element: <Liquidaciones />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
); */

