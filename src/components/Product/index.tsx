import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button'
import Tag from '../Tag'
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

const Product = ({ image, title, description, infos, assessment }: Props) => (
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
      <Button type="link" to="/Meals" title="Know more">
        Know more
      </Button>
    </Card>
  </>
)

export default Product
