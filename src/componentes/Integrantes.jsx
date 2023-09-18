import '../css/Integrantes.css'

export function Integrante ( { nombre, rol, foto, numero } ) {
    const ruta_foto=`src/media/${foto}`
    return (
        <article className={'integrante-'+numero}>
            <div className="Contenedor-integrante">
                <div className="contenedor-foto">
                    <img src={ruta_foto} alt="Foto integrante" className="foto-integrante" />
                </div>
                <div className="contenedor-nombre-rol">
                    <p className="nombre-integrante">{nombre}</p>
                    <p className='rol-integrante'>{rol}</p>
                </div>

            </div>
        </article>
    )
}