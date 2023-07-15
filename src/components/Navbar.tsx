import { useState, useEffect } from 'react'
import { MENU_BURGER } from '../icons/Icons'
import { Link } from 'react-router-dom'

export default function Navbar (): JSX.Element {
  const [menu, setMenu] = useState(false)

  const handleClickMenu = (): void => setMenu(!menu)

  const handleClick = (e: MouseEvent): void => {
    const target = e.target as Element

    if (target?.matches('nav ul a') || target?.matches('nav')) {
      setMenu(false)
    }

    if (target?.matches('header img') || target?.matches('nav ul a')) {
      scrollTo(0, 0)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <>
      <header className='header'>

        <div>
          <Link to='/'>
            <img src='/muni-logo.avif' alt='Logo de la Municipalidad de Vera' width='auto' height='auto' />
          </Link>

          <button onClick={handleClickMenu} aria-label='menu-button'>{MENU_BURGER}</button>
        </div>

      </header>

      <nav className={menu ? 'navbar' : 'navbar is-active'}>

        <ul>

          <Link to='/'>MUNICIPALIDAD DE VERA</Link>
          <a href='#services'>SERVICIOS</a>
          <a href='#reports'>NOTICIAS</a>
          <Link to='#'>CONSULTAS</Link>
          <Link to='#'>LA CIUDAD</Link>
          <Link to='#'>GOBIERNO</Link>

        </ul>

      </nav>
    </>
  )
}
