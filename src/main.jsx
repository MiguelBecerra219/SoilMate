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
import ArticuloDurazno from './routes/ArticuloDurazno';
import SobreElProyecto from './routes/SobreElProyecto';


const router = createBrowserRouter([
  {
    path: "/SoilMate/",
    element: <Home />,
  },{
    path: "/SoilMate/ArticuloLirio",
    element: <ArticuloLirio />
  },{
    path: "/SoilMate/ArticuloFresas",
    element: <ArticuloFresas />
  },{
    path: "/SoilMate/ArticuloDurazno",
    element: <ArticuloDurazno />
  },{
    path: "/SoilMate/Integrantes",
    element: <ApartadoIntegrantes />
  },{
    path: "/SoilMate/Sobre-el-proyecto",
    element: <SobreElProyecto />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
