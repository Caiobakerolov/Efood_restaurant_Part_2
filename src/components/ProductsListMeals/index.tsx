import React, { useState } from 'react'
import ProductMeals from '../ProductMeals'
import Button from '../Button'
import {
  Card,
  Container,
  Description,
  List,
  Modal,
  ModalContent,
  StyledCloseButton,
  Title
} from './styles'
import { ItemMenu } from '../../pages/Home'
import close from '../../assets/images/close.png'

export type Props = {
  dishes: ItemMenu[]
}

const ProductsListMeals: React.FC<Props> = ({ dishes }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDish, setSelectedDish] = useState<ItemMenu | null>(null)

  const openModal = (dish: ItemMenu) => {
    setSelectedDish(dish)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedDish(null)
  }

  return (
    <>
      <Container>
        <div>
          <List>
            {dishes.map((dish) => (
              <ProductMeals
                key={dish.id}
                image={dish.foto}
                title={dish.nome}
                description={dish.descricao}
                onClick={() => openModal(dish)}
              />
            ))}
          </List>
        </div>
      </Container>
      {modalOpen && selectedDish && (
        <Modal className={modalOpen ? 'visible' : ''}>
          <ModalContent>
            <StyledCloseButton onClick={closeModal}>
              <img src={close} alt="Close" />
            </StyledCloseButton>
            <Card>
              <img src={selectedDish.foto} alt={selectedDish.nome} />
              <div>
                <Title>{selectedDish.nome}</Title>
                <Description>{selectedDish.descricao}</Description>
                <Button
                  type="link"
                  to="#"
                  title="Add to Cart"
                  variant="fullWidth"
                >
                  {`Add to Cart - U$ ${selectedDish.preco}`}
                </Button>
              </div>
            </Card>
          </ModalContent>
          <div className="overlay" onClick={closeModal}></div>
        </Modal>
      )}
    </>
  )
}

export default ProductsListMeals
