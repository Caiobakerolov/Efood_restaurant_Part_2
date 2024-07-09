// import { useParams } from 'react-router-dom'

import Hero from '../../components/Hero'
import Section from '../../components/Section'

export type Props = {
  image: string
  title: string
  description: string
}

const Product = ({ image, title, description }: Props) => {
  // const { id } = useParams()

  return (
    <>
      <Hero />
      <Section image={image} title={title} description={description} />
    </>
  )
}

export default Product
