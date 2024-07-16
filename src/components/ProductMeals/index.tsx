import React from 'react'
import Button from '../Button'
import { Card, Description, Title } from './styles'

type Props = {
  image: string
  title: string
  description: string
  onClick?: (
    e:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
}

const ProductMeals: React.FC<Props> = ({
  image,
  title,
  description,
  onClick
}) => {
  const handleClick = (
    e:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <Card>
      <img src={image} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button
        type="link"
        to="#"
        title="Add to Cart"
        variant="fullWidth"
        onClick={handleClick}
      >
        Add to Cart
      </Button>
    </Card>
  )
}

export default ProductMeals
