import { useParams } from 'react-router-dom'

import ProductsListMeals from '../../components/ProductsListMeals'
import HeaderMeals from '../../components/HeaderMeals'

const Meals = () => {
  const { id } = useParams()

  return (
    <>
      <HeaderMeals />
      <ProductsListMeals dishes={[]}></ProductsListMeals>
    </>
  )
}

export default Meals
