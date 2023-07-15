import { useParams } from 'react-router-dom'
import { useData } from '../hooks/useData'

export default function Report (): JSX.Element {
  const { id } = useParams()
  const parsedId = Number(id)

  const { report } = useData(parsedId)

  scrollTo(0, 0)

  const handleBack = (): void => window.history.back()

  return (
    <section className='report-section'>

      <picture>
        <img src={report?.image} alt={report?.title} />
      </picture>

      <article>
        <small>{report?.date}</small>
        <h2>{report?.title}</h2>
        <p>{report?.info}</p>
        <button onClick={handleBack}>Volver al inicio</button>
      </article>

    </section>
  )
}
