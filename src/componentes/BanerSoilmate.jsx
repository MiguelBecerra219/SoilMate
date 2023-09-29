import { Link } from 'react-router-dom'
import '../css/BanerSoilmate.css'

export function BanerSoilmate () {
    return (
        <section className="Seccion-baner-soilmate">
            <div className="Contenedor-imagen-baner">
                <div className="contenedor-boton">
                    <Link to={"/SoilMate/Sobre-el-proyecto"}>Conoce el proyecto</Link>
                </div>
            </div>
        </section>
    )
}