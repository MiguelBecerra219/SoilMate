import '../css/Home.css'
import { Barra } from '../componentes/Nav'
import { Baner } from '../componentes/baner'
import { Articulo } from '../componentes/Articulo'
import { BanerSoilmate } from '../componentes/BanerSoilmate'

export default function Home(){
  return(
    <>
     <div className='Contenedor-principal-app'>
       <Barra />
        <Baner />
      </div>
      <BanerSoilmate />
      <Articulo nombre='Lirio' nombreCientifico='Iris germanica'/>
      <Articulo nombre='Fresas' nombreCientifico='Fragaria x ananassa'/>
      <Articulo nombre='Durazno' nombreCientifico='Prunus persica'/>
    </>
  )
}
