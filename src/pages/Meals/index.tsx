import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductsListMeals from '../../components/ProductsListMeals'
import HeaderMeals from '../../components/HeaderMeals'
import { Restaurant } from '../Home'

const Meals = () => {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const { titulo } = useParams<{ titulo: string }>()

  useEffect(() => {
    console.log('Fetching data for restaurant:', titulo)
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        const selectedRestaurant = res.find(
          (rest: Restaurant) => rest.titulo === titulo
        )
        console.log('Selected restaurant:', selectedRestaurant)
        setRestaurant(selectedRestaurant)
      })
  }, [titulo])

  return (
    <>
      {restaurant && (
        <HeaderMeals
          backgroundImage={restaurant.capa}
          title={restaurant.titulo}
          type={restaurant.tipo}
        />
      )}
      {restaurant ? (
        <ProductsListMeals dishes={restaurant.cardapio} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default Meals
