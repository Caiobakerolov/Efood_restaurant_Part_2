import React from 'react'
import Product from '../Product'
import { Restaurant } from '../../pages/Home'
import { Container, List } from './styles'

export type Props = {
  dishes: Restaurant[]
}

const ProductsList = ({ dishes }: Props) => (
  <>
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
  </>
)

export default ProductsList
