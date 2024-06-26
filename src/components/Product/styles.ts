import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  box-shadow: 0 0 0 1px ${colors.orangeRed};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 470px;
  position: relative;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  display: block;
  padding: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  padding: 8px;
  margin-bottom: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 6px;
  right: 10px;
`

export const Assessment = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.orangeRed};
  padding: 8px;
  display: flex;
  gap: 8px;
`

export const Information = styled.div`
  display: flex;
  justify-content: space-between;
`
