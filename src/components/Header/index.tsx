import { Link } from 'react-router-dom'

import { HeaderBar } from './styles'

import logo from '../../assets/images/logo.svg'

const Header = () => (
  <>
    <HeaderBar>
      <Link to="/">
        <img src={logo} alt="Efood" />
      </Link>
      <h1>Live gastronomic experiences in the comfort of your home</h1>
    </HeaderBar>
  </>
)

export default Header
