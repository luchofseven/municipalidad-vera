import { ReactElement } from 'react'
import { ICON_PC, ICON_LICENSE, ICON_CART, ICON_STATS } from '../icons/Icons'
import { Link } from 'wouter'

export default function CardServices (): ReactElement {
  return (
    <article className='card-services'>
      <ul>
        <Link href='/gobierno-electronico'>
          {ICON_PC}
          <h4>GOBIERNO ELECTRÓNICO</h4>
        </Link>
        <Link href='/licencias'>
          {ICON_LICENSE}
          <h4>LICENCIAS DE CONDUCIR</h4>
        </Link>
        <Link href='/comercio'>
          {ICON_CART}
          <h4>COMERCIO</h4>
        </Link>
        <Link href='/balances'>
          {ICON_STATS}
          <h4>BALANCES</h4>
        </Link>
      </ul>
    </article>
  )
}
