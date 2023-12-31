import '../css/PaginaArticulo.css'

export function PaginaArticulo ( { nombre, nombreCientifico, contenido }){
    return(
        <>
            <article className="articulo">
                <div className='contenedor-nombres'>
                    <h1 className='nombre-articulo'>{nombre}</h1>
                    <h2 className='nombre-cientifico-articulo'>{nombreCientifico}</h2>
                </div>
                <div className={'contenedor-imagen-'+nombre}> 
                </div >
                <section className='contenido'>
                    <p>{contenido}</p>
                </section>
            </article>
        </>
    )
}