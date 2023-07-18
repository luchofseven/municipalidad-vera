import { ICON_PC, ICON_LICENSE, ICON_CART, ICON_STATS } from '../icons/Icons'
import { Link } from 'react-router-dom'

export default function CardServices (): JSX.Element {
  return (
    <article className='card-services'>

      <ul>
        <li>
          <Link to='/gobierno-electronico'>
            {ICON_PC}
            <h4>GOBIERNO ELECTRÓNICO</h4>
          </Link>
        </li>
        <li>
          <Link to='/licencias'>
            {ICON_LICENSE}
            <h4>LICENCIAS DE CONDUCIR</h4>
          </Link>
        </li>
        <li>
          <Link to='/comercio'>
            {ICON_CART}
            <h4>COMERCIO</h4>
          </Link>
        </li>
        <li>
          <Link to='/balances'>
            {ICON_STATS}
            <h4>BALANCES</h4>
          </Link>
        </li>
      </ul>

    </article>
  )
}
