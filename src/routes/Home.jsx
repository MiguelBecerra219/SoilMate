import '../css/Home.css'
import { Barra } from '../componentes/Nav'
import { Baner } from '../componentes/baner'
import { SeccionIntegrante } from '../componentes/SeccionIntegrantes'
import { Articulo } from '../componentes/Articulo'

export default function Home(){
  return(
    <>
     <div className='Contenedor-principal-app'>
       <Barra />
        <Baner />
      </div>
      <SeccionIntegrante />
      <Articulo nombre='Lirio' nombreCientifico='Iris germanica'/>
      <Articulo nombre='Fresas' nombreCientifico='Fragaria x ananassa'/>
    </>
  )
}
