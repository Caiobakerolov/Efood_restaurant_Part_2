import { useEffect, useState } from 'react'

import { Restaurant, ItemMenu } from '../../pages/Home'
import { useGetFeaturedRestaurantsQuery } from '../../services/api'

import { findRestaurantByTitle } from './utils'

export const useRestaurants = (
  title: string,
  setRestaurant: React.Dispatch<React.SetStateAction<Restaurant | null>>
) => {
  const {
    data: restaurants,
    isLoading,
    error
  } = useGetFeaturedRestaurantsQuery()
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDish, setSelectedDish] = useState<ItemMenu | null>(null)

  useEffect(() => {
    if (restaurants) {
      const selectedRestaurant = findRestaurantByTitle(restaurants, title)
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

  const dishes = findRestaurantByTitle(restaurants, title)?.cardapio || []

  return {
    isLoading,
    error,
    modalOpen,
    selectedDish,
    openModal,
    closeModal,
    dishes
  }
}
