import React from 'react'
import Product from '../Product'
import { Restaurant } from '../../pages/Home'
import { Container, List } from './styles'
import { useGetFeaturedRestaurantsQuery } from '../../services/api'

export type Props = {
  setDishes: React.Dispatch<React.SetStateAction<Restaurant[]>>
}

const ProductsList = ({ setDishes }: Props) => {
  const { data: dishes, isLoading, error } = useGetFeaturedRestaurantsQuery()

  React.useEffect(() => {
    if (dishes) {
      setDishes(dishes)
    }
  }, [dishes, setDishes])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error loading data</p>
  }

  return (
    <Container>
      <div>
        <List>
          {dishes?.map((dish) => (
            <Product
              key={dish.id}
              image={dish.capa}
              infos={[dish.tipo]}
              assessment={dish.avaliacao.toString()}
              title={dish.titulo}
              description={dish.descricao}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
