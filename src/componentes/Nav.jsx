import { Link } from "react-router-dom"
import '../css/Home.css'

export function Barra () {
    return(
      <header className='header'>
        <div className="contenedor-logos"> 
          {/* Dividimos el contenido en dos bloqueas para poder separarlos poniendo uno a cada lado de la pagina */}
          {/* Bloque con el logo */}
          <div className='contenedor-logo'>
          </div>
          <div className="contenedor-logo2">
          </div>
        </div>
        {/* Bloque con los enlaces y el boton */}
        <div className='contenedor-links'>
          {/* Bloque para separar el boton */}
          <div className='contenedor-boton-header'>
          <Link to={"/Integrantes/"} className='link-sobre-nosotros'>Sobre nosotros</Link>
          </div>
        </div>
      </header>
    )
  }