import { AT_SIGN, DOC, FORM, MEGAPHONE, SHEET } from '../icons/Icons'

export default function ElectronicGovernment (): JSX.Element {
  return (
    <section className='pages-section electronic-government'>

      <header>

        <h2>Servicios de Gobierno Electrónico</h2>

      </header>

      <article>

        <ul>

          <a href='#'>
            {AT_SIGN}
            <p>Adhesión a Dirección Electrónica</p>
          </a>

          <a href='#'>
            {DOC}
            <p>Consulta de Deuda</p>
          </a>

          <a href='#'>
            {FORM}
            <p>Presentar Declaración Jurada</p>
          </a>

          <a href='#'>
            {MEGAPHONE}
            <p>Reclamos</p>
          </a>

          <a href='#'>
            {SHEET}
            <p>Seguimiento de Expediente</p>
          </a>

        </ul>

      </article>

    </section>
  )
}
