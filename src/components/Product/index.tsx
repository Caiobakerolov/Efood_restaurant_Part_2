import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Tag from '../Tag'
import Button from '../Button'

import {
  Card,
  Description,
  Title,
  Infos,
  Assessment,
  Information
} from './styles'

type Props = {
  image: string
  infos: string[]
  assessment: string
  title: string
  description: string
}

const Product = ({ image, title, description, infos, assessment }: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 250) + '...'
    }
    return description
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
        <Description>{getDescription(description)}</Description>
        <Button
          type="link"
          title="Saiba Mais"
          to={`/meals/${title}`}
          variant="default"
        >
          Saiba Mais
        </Button>
      </Card>
    </>
  )
}

export default Product
