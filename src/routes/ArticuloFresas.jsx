import { PaginaArticulo } from "../componentes/PaginaArticulo";
import { Barra } from "../componentes/Nav";
import { articuloFresas } from "../constantes/constantes";

export default function ArticuloFresas () {
    return (
        <>
            <Barra />
            <PaginaArticulo nombre={articuloFresas.nombre} nombreCientifico={articuloFresas.nombreCientifico} imagen={articuloFresas.imagen} contenido={articuloFresas.contenido}/>
        </>
    )
}