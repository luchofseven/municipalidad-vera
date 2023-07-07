import { ReactElement } from 'react'
import Hero from '../components/Hero'
import CardServices from '../components/CardServices'
import CardNews from '../components/CardNews'
import ButtonToTop from '../components/ButtonToTop'
import { apiNews } from '../mock_api/news'

export default function Home (): ReactElement {
  return (
    <main id='home' className='main-container'>
      <Hero />
      <h2 className='section-title' id='services'>SERVICIOS</h2>
      <CardServices />
      <h2 className='section-title' id='reports'>NOTICIAS</h2>
      <section className='section-news'>
        {apiNews.length !== 0
          ? apiNews?.map(report => <CardNews key={report.id} id={report.id} title={report.title} image={report.image} date={report.date} info={report.info} />)
          : <h3 style={{ textAlign: 'center' }}>No hay noticias para mostrar</h3>}
      </section>
      <ButtonToTop />
    </main>
  )
}
