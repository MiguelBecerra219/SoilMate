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
          <Link to={"/SoilMate/"} className='link-header'>Comentarios</Link>
          <Link to={"/SoilMate/"} className='link-header'>Guardados</Link>
          {/* Bloque para separar el boton */}
          <div className='contenedor-boton-header'>
            <button className='boton-header'>Sobre nosotros</button>
          </div>
        </div>
      </header>
    )
  }