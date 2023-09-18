import { PaginaArticulo } from "../componentes/PaginaArticulo";
import { Barra } from "../componentes/Nav";
import { articuloLirio } from "../constantes/constantes";

export default function ArticuloLirio () {
    return (
        <>
            <Barra />
            <PaginaArticulo nombre={articuloLirio.nombre} nombreCientifico={articuloLirio.nombreCientifico} imagen={articuloLirio.imagen} contenido={articuloLirio.contenido}/>
        </>
    )
}