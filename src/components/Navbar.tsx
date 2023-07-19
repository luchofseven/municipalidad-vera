import { useState, useEffect } from 'react'
import { MENU_BURGER } from '../icons/Icons'
import { Link } from 'react-router-dom'

export default function Navbar (): JSX.Element {
  const [menu, setMenu] = useState(false)

  const handleClickMenu = (): void => setMenu(!menu)

  const handleNavbar = (e: MouseEvent): void => {
    const target = e.target as Element

    if (target?.matches('nav ul a') || target?.matches('nav')) {
      setMenu(false)
    }

    if (target?.matches('header img') || target?.matches('nav ul a')) {
      scrollTo(0, 0)
    }
  }

  const handleHeader = (): void => {
    const $header = document.querySelector('.header') as HTMLElement

    if (Math.round(window.scrollY) > 150) {
      $header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'
      $header.style.backdropFilter = 'blur(5px)'
    } else {
      $header.style.backgroundColor = 'transparent'
      $header.style.backdropFilter = 'none'
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleNavbar)
    document.addEventListener('scroll', handleHeader)

    return () => {
      document.removeEventListener('click', handleNavbar)
      document.removeEventListener('scroll', handleHeader)
    }
  }, [])

  return (
    <>
      <header className='header'>

        <div>
          <Link to='/'>
            <img src='/muni-logo.avif' alt='Logo de la Municipalidad de Vera' width='180px' height='180px' />
          </Link>

          <button onClick={handleClickMenu} className={`${menu ? 'is-active' : ''}`} aria-label='menu-button'>{MENU_BURGER}</button>
        </div>

        <nav className={menu ? 'navbar is-active' : 'navbar'}>

          <ul>

            <Link to='/'>MUNICIPALIDAD DE VERA</Link>

            <a href='#services'>SERVICIOS</a>

            <a href='#reports'>NOTICIAS</a>

            <a href='#'>CONSULTAS</a>

            <a href='#'>LA CIUDAD</a>

            <a href='#'>GOBIERNO</a>

          </ul>

        </nav>

      </header>

    </>
  )
}
