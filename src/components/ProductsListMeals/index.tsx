import React, { useState, useEffect } from 'react'

import ProductMeals from '../ProductMeals'
import { useGetFeaturedRestaurantsQuery } from '../../services/api'
import { ItemMenu, Restaurant } from '../../pages/Home'

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

export type Props = {
  setRestaurant: React.Dispatch<React.SetStateAction<Restaurant | null>>
  title: string
}

const ProductsListMeals: React.FC<Props> = ({ setRestaurant, title }) => {
  const {
    data: restaurants,
    isLoading,
    error
  } = useGetFeaturedRestaurantsQuery()

  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDish, setSelectedDish] = useState<ItemMenu | null>(null)

  useEffect(() => {
    if (restaurants) {
      const selectedRestaurant = restaurants.find(
        (rest: Restaurant) => rest.titulo === title
      )
      setRestaurant(selectedRestaurant || null)
    }
  }, [restaurants, title, setRestaurant])

  const openModal = (dish: ItemMenu) => {
    setSelectedDish(dish)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedDish(null)
  }

  const getDescription = (description: string) =>
    description.length > 95 ? `${description.slice(0, 92)}...` : description

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error loading data</p>
  }

  const dishes =
    restaurants?.find((rest: Restaurant) => rest.titulo === title)?.cardapio ||
    []

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
