import Button from '../Button'
import { Card, Description, Title } from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const ProductMeals = ({ image, title, description }: Props) => {
  return (
    <>
      <Card>
        <img src={image} alt={title} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button
          type="link"
          to="/DetailsProduct"
          title="Add to Cart"
          variant="fullWidth"
        >
          Add to Cart
        </Button>
      </Card>
    </>
  )
}

export default ProductMeals
