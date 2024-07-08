import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import pasta from '../../assets/images/pasta.png'
import { colors } from '../../styles'

export const HeaderMeal = styled.header`
  background-image: url(https://efood-alpha-nine.vercel.app/static/media/fundoHero.784e90d06596c838a246.png);

  img {
    width: 125px;
    height: 57px;
    margin-top: 30px;
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
    line-height: 42px;
    padding-top: 30px;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 40px;
`

export const BackgroundImage = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  margin-top: 64px;

  .image-wrapper {
    position: absolute;
    width: 100%;
    height: 280px;
    background-image: url(${pasta});
    background-size: cover;
    background-position: center;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  .description {
    position: relative;
    color: ${colors.white};
    font-size: 32px;
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    gap: 128px;
    margin-left: 380px;

    p {
      font-size: 32px;
      font-weight: 100;
      line-height: 38px;
      width: 101px;
      height: 33.25px;
      top: 187px;
      left: 170px;
      gap: 0px;
      opacity: 0px;
    }

    h3 {
      font-size: 32px;
      font-weight: 900;
      line-height: 38px;
      width: 676px;
      height: 33.25px;
      top: 376.75px;
      left: 170px;
      gap: 0px;
      opacity: 0px;
    }
  }
`

export const StyledIcon = styled(FontAwesomeIcon)`
  margin-left: 8px;
  padding-top: 30px;
  cursor: pointer;
`
