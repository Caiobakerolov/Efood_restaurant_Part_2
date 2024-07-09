import Button from '../Button'
import { Card, Description, Title } from './styles'

export type Props = {
  image: string
  title: string
  description: string
}

const Section = ({ image, title, description }: Props) => {
  return (
    <>
      <Card>
        <img src={image} alt={title} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button
          type="link"
          to="/Product"
          title="Add to Cart"
          variant="fullWidth"
        >
          Add to Cart
        </Button>
      </Card>
    </>
  )
}

export default Section
