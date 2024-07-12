import ProductsListMeals from '../../components/ProductsListMeals'
import DishPizza from '../../models/DishPizza'
import HeaderMeals from '../../components/HeaderMeals'
import pizza from '../../assets/images/pizza.png'

const meals: DishPizza[] = [
  {
    id: 1,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'The classic Margherita: juicy tomato sauce, melted mozzarella, fresh basil and a touch of olive oil. Flavor and simplicity!'
  },
  {
    id: 2,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'The classic Margherita: juicy tomato sauce, melted mozzarella, fresh basil and a touch of olive oil. Flavor and simplicity!'
  },
  {
    id: 3,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'The classic Margherita: juicy tomato sauce, melted mozzarella, fresh basil and a touch of olive oil. Flavor and simplicity!'
  },
  {
    id: 4,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'The classic Margherita: juicy tomato sauce, melted mozzarella, fresh basil and a touch of olive oil. Flavor and simplicity!'
  },
  {
    id: 5,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'The classic Margherita: juicy tomato sauce, melted mozzarella, fresh basil and a touch of olive oil. Flavor and simplicity!'
  },
  {
    id: 6,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'The classic Margherita: juicy tomato sauce, melted mozzarella, fresh basil and a touch of olive oil. Flavor and simplicity!'
  }
]

const Meals = () => (
  <>
    <HeaderMeals />
    <ProductsListMeals dishes={meals} />
  </>
)

export default Meals
