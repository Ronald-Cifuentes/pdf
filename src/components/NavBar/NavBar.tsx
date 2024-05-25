import { FC } from 'react'
import { NavBarContainer } from './NavBar.styled'
import { NavBarProps } from './interfaces'

const NavBar: FC<NavBarProps> = ({ dataTestId = 'nav-bar' }) => {
  return (
    <NavBarContainer data-testid={dataTestId}>
      <h1>NavBar component</h1>
    </NavBarContainer>
  )
}

export default NavBar
