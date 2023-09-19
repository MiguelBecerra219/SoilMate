import '../css/Integrantes.css'

export function Integrante ( { nombre, rol, foto, numero } ) {

    return (
        <article className={'integrante-'+numero}>
            <div className="Contenedor-integrante">
                <div className={"contenedor-foto-"+numero}>
                </div>
                <div className="contenedor-nombre-rol">
                    <p className="nombre-integrante">{nombre}</p>
                    <p className='rol-integrante'>{rol}</p>
                </div>

            </div>
        </article>
    )
}