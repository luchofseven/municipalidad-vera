import { useState, useEffect } from 'react'
import { ARROW_UP } from '../icons/Icons'

export default function ButtonToTop (): JSX.Element {
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

    return () => document.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <button
        className={scroll > 500 ? 'button-to-top is-active' : 'button-to-top'}
        aria-label='to-top-button'
        onClick={handleClick}
      >
        {ARROW_UP}
      </button>
    </>
  )
}
