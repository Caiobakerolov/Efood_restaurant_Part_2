import { useState } from 'react'
import { useParams } from 'react-router-dom'

import ProductsListMeals from '../../components/ProductsListMeals'
import HeaderMeals from '../../components/HeaderMeals'
import { Restaurant } from '../../pages/Home'

const Meals = () => {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const { title } = useParams<{ title: string }>()

  return (
    <>
      {restaurant && (
        <HeaderMeals
          backgroundImage={restaurant.capa}
          title={restaurant.titulo}
          type={restaurant.tipo}
        />
      )}
      <ProductsListMeals setRestaurant={setRestaurant} title={title || ''} />
    </>
  )
}

export default Meals
