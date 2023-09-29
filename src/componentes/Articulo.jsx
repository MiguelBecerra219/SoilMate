import { Link } from 'react-router-dom'
import '../css/Articulo.css'

export function Articulo ({ nombre, nombreCientifico }) {
    const articulo = 'articulo-new-'+nombre
    return (
      <article className={articulo}>
        <div className='contenedor-informacion'>
            <div className='contenedor-texto'>
                <p className="nombre-articulo">{nombre}</p>
                <p className="nombre-cientifico-articulo">{nombreCientifico}</p>
            </div>
            <div className='contenedor-boton'>
                <button className="boton-ver-mas"><Link to={'/SoilMate/Articulo'+nombre} className='Link'>Ver mas</Link></button>
            </div>
        </div>
      </article>
    )
  }