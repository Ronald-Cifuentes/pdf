import { FC } from 'react'
import { NavProductsContainer } from './NavProducts.styled'
import { NavProductsProps } from './interfaces'
import './Navproducts.scss'

const MenuNames = [{ name: 'Home' }, { name: 'About' }, { name: 'Service' }, { name: 'Team' }]

const NavProducts: FC<NavProductsProps> = ({ dataTestId = 'nav-products' }) => {
  return (
    <NavProductsContainer data-testid={dataTestId}>
      <ul className='nav'>
        {MenuNames.map((item, ind) => (
          <li className='nav-item' key={`${ind}`}>
            <a className='nav-link' href={`#${item.name}`}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </NavProductsContainer>
  )
}

export default NavProducts
