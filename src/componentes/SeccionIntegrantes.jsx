import { Integrante } from "./Integrantes";
import '../css/SeccionIntegrantes.css'
import { integrantes } from '../constantes/constantes.js'

export function SeccionIntegrante (){
    return (
        <section className="Seccion-integrantes">
            <div className="Contenedor-integantes">
                {integrantes.map( item => (
                    <Integrante  key='4' nombre={item.nombre} rol={item.rol} foto={item.foto} numero={item.numero} />
                ))}
            </div>
        </section>
    )
}