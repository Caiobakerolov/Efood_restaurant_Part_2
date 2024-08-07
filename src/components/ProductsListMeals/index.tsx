import React, { useState, useEffect } from 'react'

import { ItemMenu, Restaurant } from '../../types'
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
  setRestaurant: React.Dispatch<React.SetStateAction<Restaurant | null>>
  titulo: string
}

const ProductsListMeals: React.FC<Props> = ({
  dishes,
  setRestaurant,
  titulo
}) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDish, setSelectedDish] = useState<ItemMenu | null>(null)

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
  }, [titulo, setRestaurant])

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
