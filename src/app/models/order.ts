import { Product } from './product'

export class OrderInfo {
  fullName: string
  address: string
  ccNumber: string
  totalPrice: number
  cartItems: Product[]

  constructor() {
    this.fullName = ''
    this.address = ''
    this.ccNumber = ''
    this.totalPrice = 0
    this.cartItems = []
  }
}
