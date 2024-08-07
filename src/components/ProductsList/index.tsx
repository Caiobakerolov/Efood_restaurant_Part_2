import React, { useEffect } from 'react'

import Product from '../Product'
import { Restaurant } from '../../pages/Home'
import { useGetFeaturedRestaurantsQuery } from '../../services/api'

import { Container, List } from './styles'

export type Props = {
  setDishes: React.Dispatch<React.SetStateAction<Restaurant[]>>
}

const ProductsList = ({ setDishes }: Props) => {
  const {
    data: restaurants,
    isLoading,
    error
  } = useGetFeaturedRestaurantsQuery()

  useEffect(() => {
    if (restaurants) {
      setDishes(restaurants)
    }
  }, [restaurants, setDishes])

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
          {restaurants?.map((dish) => (
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
