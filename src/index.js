import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/layout/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Price from './components/layout/Price/Price';
import Press from './components/layout/press/Press';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/price",
    element: <Price />,
  },
  {
    path: "/press",
    element: <Press />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    {/* <App /> */}
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
