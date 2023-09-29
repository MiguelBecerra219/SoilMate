import '../css/Integrantes.css'

export function Integrante ( { nombre, foto, numero } ) {

    return (
        <article className={'integrante-'+numero}>
            <div className="Contenedor-integrante">
                <div className={"contenedor-foto-"+numero}>
                </div>
                <div className="contenedor-nombre-rol">
                    <p className="nombre-integrante">{nombre}</p>
                </div>
            </div>
        </article>
    )
}