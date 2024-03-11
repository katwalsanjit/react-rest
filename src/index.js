import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import About from "./components/About";
import Contact from "./components/Contact";
import NotFoundPage from './components/NotFoundPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
  // routing configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <NotFoundPage />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

