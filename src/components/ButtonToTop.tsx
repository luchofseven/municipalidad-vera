import { ReactElement, useState, useEffect } from 'react'
import { ARROW_UP } from '../icons/Icons'

export default function ButtonToTop (): ReactElement {
  const [scroll, setScroll] = useState(0)

  const handleClick = (): void => {
    scrollTo(0, 0)
    setScroll(0)
  }

  const handleScroll = (): void => {
    setScroll(Math.round(window.scrollY))
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {scroll > 500 && <button className='button-to-top' onClick={handleClick} aria-label='to-top-button'>{ARROW_UP}</button>}
    </>
  )
}
