import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles'

export const ButtonContainer = styled.button<{ variant: string }>`
  font-size: 14px;
  font-weight: 700;
  background-color: ${({ variant }) =>
    variant === 'fullWidth' ? colors.creamWhite : colors.orangeRed};
  color: ${({ variant }) =>
    variant === 'fullWidth' ? colors.orangeRed : colors.creamWhite};
  width: ${({ variant }) => (variant === 'fullWidth' ? '90%' : '82px')};
  margin: ${({ variant }) =>
    variant === 'fullWidth' ? '8px auto 8px' : '8px 0 80px 8px'};
  height: 24px;
  padding: 4px 6px;
  text-align: center;
  align-items: center;
`

export const ButtonLink = styled(Link)<{ variant: string }>`
  font-size: 14px;
  font-weight: 700;
  background-color: ${({ variant }) =>
    variant === 'fullWidth' ? colors.creamWhite : colors.orangeRed};
  color: ${({ variant }) =>
    variant === 'fullWidth' ? colors.orangeRed : colors.creamWhite};
  width: ${({ variant }) => (variant === 'fullWidth' ? '90%' : '90px')};
  margin: ${({ variant }) =>
    variant === 'fullWidth' ? '8px auto 8px' : '8px 0 8px 8px'};
  padding: 4px 6px;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  cursor: pointer;
`
