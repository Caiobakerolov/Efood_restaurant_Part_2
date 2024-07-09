import { Link } from 'react-router-dom'

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import {
  HeroContainer,
  Container,
  BackgroundImage,
  StyledIcon,
  Description,
  ImageWrapper
} from './styles'

import logo from '../../assets/images/logo.svg'
import pasta from '../../assets/images/pasta.png'

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <Container>
          <h2>Restaurant</h2>
          <Link to="/">
            <img src={logo} alt="Efood" />
          </Link>
          <p>
            0 - Product in cart
            <StyledIcon icon={faShoppingCart} />
          </p>
        </Container>
        <BackgroundImage>
          <ImageWrapper style={{ backgroundImage: `url(${pasta})` }} />
          <Description>
            <p>Italiana</p>
            <h3>La Dolce Vita Trattoria</h3>
          </Description>
        </BackgroundImage>
      </HeroContainer>
    </>
  )
}

export default Hero
