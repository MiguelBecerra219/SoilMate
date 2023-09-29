import { PaginaArticulo } from "../componentes/PaginaArticulo";
import { Barra } from "../componentes/Nav";
import { articuloSoilMate } from "../constantes/constantes";

export default function SobreElProyecto () {
    return (
        <>
            <Barra />
            <PaginaArticulo nombre={articuloSoilMate.nombre} nombreCientifico={articuloSoilMate.nombreCientifico} imagen={articuloSoilMate.imagen} contenido={articuloSoilMate.contenido}/>
        </>
    )
}