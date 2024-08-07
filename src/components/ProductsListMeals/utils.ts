import { Restaurant } from '../../pages/Home'

export const getDescription = (description: string) =>
  description.length > 95 ? `${description.slice(0, 92)}...` : description

export const findRestaurantByTitle = (
  restaurants: Restaurant[] | undefined,
  title: string
): Restaurant | undefined =>
  restaurants?.find((rest: Restaurant) => rest.titulo === title)
