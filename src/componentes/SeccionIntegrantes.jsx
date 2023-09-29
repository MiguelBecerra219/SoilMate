import { Integrante } from "./Integrantes";
import '../css/SeccionIntegrantes.css'
import { integrantes } from '../constantes/constantes.js'
import { HistoriaIntegrantes } from "../constantes/constantes.js";

export function SeccionIntegrante (){
    return (
        <section className="Seccion-integrantes">
            <div className="Contenedor-integantes">
                {integrantes.map( item => (
                    <Integrante  key='4' nombre={item.nombre} rol={item.rol} foto={item.foto} numero={item.numero} />
                ))}
            </div>
            <div className="Historia-integrantes">
                <h2 className="titulo-historia-integrantes">{HistoriaIntegrantes.titulo}</h2>
                <p className="Parrafo-historia-integrantes">{HistoriaIntegrantes.text}</p>
            </div>
        </section>
    )
}
