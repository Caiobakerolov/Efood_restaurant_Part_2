import React, { useState } from 'react'
import DishPizza from '../../models/DishPizza'
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

import pizza from '../../assets/images/pizza.png'
import close from '../../assets/images/close.png'

export type Props = {
  dishes: DishPizza[]
}

const ProductsListMeals: React.FC<Props> = ({ dishes }) => {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = (
    e:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
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
                onClick={openModal}
              />
            ))}
          </List>
        </div>
      </Container>
      {modalOpen && (
        <Modal className={modalOpen ? 'visible' : ''}>
          <ModalContent>
            <StyledCloseButton onClick={closeModal}>
              <img src={close} alt="Close" />
            </StyledCloseButton>
            <Card>
              <img src={pizza} alt="Pizza Margherita" />
              <div>
                <Title>Pizza Margherita</Title>
                <Description>
                  A pizza Margherita é uma pizza clássica da culinária italiana,
                  reconhecida por sua simplicidade e sabor inigualável. Ela é
                  feita com uma base de massa fina e crocante, coberta com molho
                  de tomate fresco, queijo mussarela de alta qualidade,
                  manjericão fresco e azeite de oliva extra-virgem. A combinação
                  de sabores é perfeita, com o molho de tomate suculento e
                  ligeiramente ácido, o queijo derretido e cremoso e as folhas
                  de manjericão frescas, que adicionam um toque de sabor
                  herbáceo. É uma pizza simples, mas deliciosa, que agrada a
                  todos os paladares e é uma ótima opção para qualquer ocasião.{' '}
                  <br />
                  <br /> Serve: de 2 a 3 pessoas
                </Description>
                <Button
                  type="link"
                  to="#"
                  title="Add to Cart"
                  variant="fullWidth"
                >
                  Add to Cart - U$ 60,90
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
