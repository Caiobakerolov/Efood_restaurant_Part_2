import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.orangeRed};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 320px;
  height: 338px;
`

export const Title = styled.h3`
  color: ${colors.creamWhite};
  font-size: 16px;
  font-weight: 900;
  padding: 8px;
`

export const Description = styled.p`
  color: ${colors.creamWhite};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding: 8px;
`
