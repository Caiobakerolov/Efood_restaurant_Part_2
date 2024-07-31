import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import Header from '../../components/Header'

export interface ItemMenu {
  id: number
  nome: string
  descricao: string
  porcao: string
  preco: number
  foto: string
}

export interface Restaurant {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ItemMenu[]
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      <Header />
      <ProductsList dishes={restaurants} />
    </>
  )
}

export default Home
