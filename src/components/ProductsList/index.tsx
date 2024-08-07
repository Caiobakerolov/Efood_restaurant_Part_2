import React, { useEffect } from 'react'

import Product from '../Product'
import { Restaurant } from '../../types'

import { Container, List } from './styles'

export type Props = {
  dishes: Restaurant[]
  setDishes: React.Dispatch<React.SetStateAction<Restaurant[]>>
}

const ProductsList = ({ dishes, setDishes }: Props) => {
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setDishes(res))
  }, [setDishes])

  return (
    <Container>
      <div>
        <List>
          {dishes.map((dish) => (
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
