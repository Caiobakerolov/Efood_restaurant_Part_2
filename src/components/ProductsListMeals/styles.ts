import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 120px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px;
  padding-top: 56px;

  img {
    display: flex;
    margin: 0 auto;
    margin-top: 12px;
    width: 304px;
    height: 167px;
  }
`

export const Modal = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  position: relative;
  width: 1024px;
  height: 344px;
  z-index: 1;
`

export const Card = styled.div`
  background-color: ${colors.orangeRed};
  display: flex;

  img {
    margin: 32px 24px 32px 32px;
    width: 280px;
    height: 280px;
  }

  div {
    margin-top: 32px;
  }
`

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
  }
`

export const Title = styled.h3`
  color: ${colors.creamWhite};
  font-size: 16px;
  font-weight: 900;
  display: flex;
  justify-content: space-between;
`

export const Description = styled.p`
  color: ${colors.creamWhite};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 20px;
`
