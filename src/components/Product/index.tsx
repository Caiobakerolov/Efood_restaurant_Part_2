import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Tag from '../Tag'
import {
  Card,
  Description,
  Title,
  Infos,
  Assessment,
  Information
} from './styles'
import Button from '../Button'

type Props = {
  image: string
  infos: string[]
  assessment: string
  title: string
  description: string
}

const Product = ({ image, title, description, infos, assessment }: Props) => {
  const handleClick = () => {
    console.log(`Navigating to /meals/${title}`)
  }

  return (
    <>
      <Card>
        <img src={image} alt={title} />
        <Infos>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </Infos>
        <Information>
          <Title>{title}</Title>
          <Assessment>
            {assessment}
            <FontAwesomeIcon icon={faStar} color="#FFB930" />
          </Assessment>
        </Information>
        <Description>{description}</Description>
        <Button
          type="link"
          title="Know more"
          to={`/meals/${title}`}
          onClick={handleClick}
          variant="default"
        >
          Know more
        </Button>
      </Card>
    </>
  )
}

export default Product
