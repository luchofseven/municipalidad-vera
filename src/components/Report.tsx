import { useParams } from 'react-router-dom'
import { useData } from '../hooks/useData'

export default function Report (): JSX.Element {
  const { id } = useParams()
  const parsedId = Number(id)

  const { title, image, date, info } = useData(parsedId)

  scrollTo(0, 0)

  const handleBack = (): void => window.history.back()

  return (
    <section className='report-section'>

      <picture>
        <img src={image} alt={title} />
      </picture>

      <article>
        <small>{date}</small>
        <h2>{title}</h2>
        <p>{info}</p>
        <button onClick={handleBack}>Volver al inicio</button>
      </article>

    </section>
  )
}
