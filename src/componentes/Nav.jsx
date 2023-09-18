import { Link } from "react-router-dom"
import '../css/Home.css'

export function Barra () {
    return(
      <header className='header'>
        {/* Dividimos el contenido en dos bloqueas para poder separarlos poniendo uno a cada lado de la pagina */}
        {/* Bloque con el logo */}
        <div className='contenedor-logo'>
          <img src={'src/media/SoilMate-logo.png' } alt='Logo de SoilMate' className='header-logo' />
          <img src={'src/media/SoilMate-name.png' } alt='Logo de SoilMate' className='header-logo-name' />
        </div>
        {/* Bloque con los enlaces y el boton */}
        <div className='contenedor-links'>
          <Link to={"/"} className='link-header'>Comentarios</Link>
          <Link to={"/"} className='link-header'>Guardados</Link>
          {/* Bloque para separar el boton */}
          <div className='contenedor-boton-header'>
            <button className='boton-header'>Sobre nosotros</button>
          </div>
        </div>
      </header>
    )
  }