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

type HeaderMealsProps = {
  backgroundImage: string
  title: string
  type: string
}

const HeaderMeals = ({ backgroundImage, title, type }: HeaderMealsProps) => {
  return (
    <>
      <HeroContainer>
        <Container>
          <h2>Restaurant</h2>
          <Link to="/">
            <img src={logo} alt="Efood" />
          </Link>
          <p>
            0 - Produtos no carrinho
            <StyledIcon icon={faShoppingCart} />
          </p>
        </Container>
        <BackgroundImage>
          <ImageWrapper
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <Description>
            <p>{type}</p>
            <h3>{title}</h3>
          </Description>
        </BackgroundImage>
      </HeroContainer>
    </>
  )
}

export default HeaderMeals
