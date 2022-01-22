export class OrderProduct {
  id: number
  quantity: number
  order_id: number
  product_id: number

  constructor() {
    this.id = 1
    this.quantity = 0
    this.order_id = 0
    this.product_id = 0
  }
}
