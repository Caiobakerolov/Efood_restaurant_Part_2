import React from 'react'

import ProductMeals from '../ProductMeals'

import { Props } from './types'
import { useRestaurants } from './hooks'
import { getDescription } from './utils'

import {
  Container,
  List,
  Modal,
  ModalContent,
  StyledCloseButton,
  Card,
  Title,
  Description,
  StyledButton
} from './styles'

import close from '../../assets/images/close.png'

const ProductsListMeals: React.FC<Props> = ({ setRestaurant, title }) => {
  const {
    isLoading,
    error,
    modalOpen,
    selectedDish,
    openModal,
    closeModal,
    dishes
  } = useRestaurants(title, setRestaurant)

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error loading data</p>
  }

  return (
    <>
      <Container>
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
