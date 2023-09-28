import { PaginaArticulo } from "../componentes/PaginaArticulo";
import { Barra } from "../componentes/Nav";
import { articuloDurazno } from "../constantes/constantes";

export default function ArticuloDurazno () {
    return (
        <>
            <Barra />
            <PaginaArticulo nombre={articuloDurazno.nombre} nombreCientifico={articuloDurazno.nombreCientifico} imagen={articuloDurazno.imagen} contenido={articuloDurazno.contenido}/>
        </>
    )
}