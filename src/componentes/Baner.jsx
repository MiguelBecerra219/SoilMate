import '../css/Baner.css'

export function Baner () {
  return (
    <section className='contenedor-principal'>
      {/* Hacemos un contenedor interno para el baner */}
      <article className='contenedor-baner'>
        <div className='contenedor-titulo'>
          <h1>Cultiva con confianza.</h1>
        </div>
        <div className='contenedor-parrafo'>
          <p>Cuida de tu planta, descubre el poder de la <span>tecnología</span> en el campo.</p>
        </div>
      </article>
    </section>
  )
}
