import { ReactElement } from 'react'
import { useRoute, useLocation } from 'wouter'
import { apiNews } from '../mock_api/news'

export default function Report (): ReactElement {
  const [match, params] = useRoute('/report/:id')
  const [, setLocation] = useLocation()

  if (!match) setLocation('/') // Si match es "false" redireccionamos al index.

  const data = apiNews.find((report) => report.id === params?.id) // Extraemos la información que necesitamos para expandir la noticia.

  if (data === undefined) setLocation('/') // Si no tenemos información, redireccionamos al index para evitar que no se rompa nuestra UI.

  scrollTo(0, 0) // Hacemos scroll arriba del todo para facilitar la experiencia al usuario.

  const handleBack = (): void => {
    // Replicamos la acción del botón de "atrás" del navegador para que el scroll nos deje exactamente en el punto desde el cual partimos.
    window.history.back()
  }

  return (
    <section className='report-section'>
      <picture>
        <img src={data?.image} alt={data?.title} />
      </picture>
      <article>
        <small>{data?.date}</small>
        <h2>{data?.title}</h2>
        <p>{data?.info}</p>
        <button onClick={handleBack}>Volver al inicio</button>
      </article>
    </section>
  )
}
