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
