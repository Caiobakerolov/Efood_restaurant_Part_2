import { Restaurant } from '../../pages/Home'

export interface Props {
  setRestaurant: React.Dispatch<React.SetStateAction<Restaurant | null>>
  title: string
}
