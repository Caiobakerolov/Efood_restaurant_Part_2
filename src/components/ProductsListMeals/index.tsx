import ProductMeals from '../ProductMeals'
import DishPizza from '../../models/DishPizza'

import { Container, List, Modal } from './styles'

import Pasta from '../../assets/images/pasta.png'
import close from '../../assets/images/close.png'

export type Props = {
  dishes: DishPizza[]
}

const ProductsListMeals = ({ dishes }: Props) => (
  <>
    <Container>
      <div>
        <List>
          {dishes.map((dish) => (
            <ProductMeals
              key={dish.id}
              image={dish.image}
              title={dish.title}
              description={dish.description}
            />
          ))}
        </List>
      </div>
    </Container>
    <Modal>
      <div>
        <header>
          <h4>
            Name
            <img src={close} alt="icon close" />
          </h4>
        </header>
        <img src={Pasta} alt="" />
      </div>
    </Modal>
  </>
)

export default ProductsListMeals
