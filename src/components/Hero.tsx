import { ReactElement } from 'react'

export default function Hero (): ReactElement {
  return (
    <section className='hero'>
      <div className='hero-img'>
        <img src='/municipalidad.avif' alt='Foto de la Municipalidad de Vera' />
        <div>
          <h2>MUNICIPALIDAD DE <span>VERA</span></h2>
          <h3>Gestión <span>Paula Mitre</span></h3>
        </div>
      </div>
    </section>
  )
}
