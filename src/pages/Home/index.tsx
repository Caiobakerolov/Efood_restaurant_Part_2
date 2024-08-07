import { useState } from 'react'

import ProductsList from '../../components/ProductsList'
import Header from '../../components/Header'
import { Restaurant } from '../../types'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  return (
    <>
      <Header />
      <ProductsList dishes={restaurants} setDishes={setRestaurants} />
    </>
  )
}

export default Home
