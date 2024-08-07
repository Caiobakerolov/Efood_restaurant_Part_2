import { useState } from 'react'
import { useParams } from 'react-router-dom'

import ProductsListMeals from '../../components/ProductsListMeals'
import HeaderMeals from '../../components/HeaderMeals'
import { Restaurant } from '../../types'

const Meals = () => {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const { titulo } = useParams<{ titulo: string }>()

  return (
    <>
      {restaurant && (
        <HeaderMeals
          backgroundImage={restaurant.capa}
          title={restaurant.titulo}
          type={restaurant.tipo}
        />
      )}
      <ProductsListMeals
        dishes={restaurant ? restaurant.cardapio : []}
        setRestaurant={setRestaurant}
        titulo={titulo || ''}
      />
    </>
  )
}

export default Meals
