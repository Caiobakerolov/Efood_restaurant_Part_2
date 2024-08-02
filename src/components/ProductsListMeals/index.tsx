import React, { useState } from 'react'

import { ItemMenu } from '../../pages/Home'
import ProductMeals from '../ProductMeals'

import {
  Card,
  Container,
  Description,
  List,
  Modal,
  ModalContent,
  StyledButton,
  StyledCloseButton,
  Title
} from './styles'

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

  const getDescription = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 92) + '...'
    }
    return description
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
                description={getDescription(dish.descricao)}
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
                <p>Serve: 2 a 3 pessoas</p>
                <StyledButton type="button" title="Adicionar ao Carrinho">
                  {`Adicionar ao Carrinho - R$ ${selectedDish.preco}`}
                </StyledButton>
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
