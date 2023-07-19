import { Link } from 'react-router-dom'
import { type ReportData } from '../types'

export default function CardNews ({ report }: { report: ReportData }): JSX.Element {
  const { id, title, image, date, info } = report

  return (
    <Link to={`/report/${id}`}>
      <article className='card-news'>

        <div className='card-img'>
          <img src={image} alt={title} width='200px' height='auto' />
        </div>

        <div className='card-info'>
          <h3>{title}</h3>
          <small>{date}</small>
          <p>{info}</p>
        </div>

        <footer>Ver noticia completa...</footer>

      </article>
    </Link>
  )
}
