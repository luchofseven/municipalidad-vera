import { ReactElement } from 'react'
import { Link } from 'wouter'

interface Reports {
  id: `${string}-${string}-${string}-${string}-${string}`
  title: string
  image: string
  date: string
  info: string
}

export default function CardNews ({ id, title, image, date, info }: Reports): ReactElement {
  return (
    <article className='card-news'>
      <div className='card-img'>
        <img src={image} alt={title} width='200px' height='auto' />
      </div>
      <div className='card-info'>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{info}</p>
      </div>
      <Link href={`/report/${id}`}>Leer más...</Link>
    </article>
  )
}
