import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./routes/Home.jsx"
import ArticuloLirio from './routes/ArticuloLirio';
import ArticuloFresas from './routes/ArticuloFresas';
import ApartadoIntegrantes from './routes/ApartadoIntegrantes';

const router = createBrowserRouter([
  {
    path: "/SoilMate/",
    element: <Home />,
  },{
    path: "/ArticuloLirio",
    element: <ArticuloLirio />
  },{
    path: "/ArticuloFresas",
    element: <ArticuloFresas />
  },{
    path: "/Integrantes",
    element: <ApartadoIntegrantes />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
