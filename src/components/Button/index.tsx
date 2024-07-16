import React from 'react'
import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: (
    e:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  children: string
  variant?: 'default' | 'fullWidth'
}

const Button: React.FC<Props> = ({
  type,
  title,
  to = '#',
  onClick,
  children,
  variant = 'default'
}) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        variant={variant}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to} title={title} variant={variant} onClick={onClick}>
      {children}
    </ButtonLink>
  )
}

export default Button
