import { Injectable } from '@angular/core'
import { Product } from '../models/product'
import { OrderInfo } from '../models/order'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Product[] = []
  orderInfo: OrderInfo = {
    fullName: '',
    ccNumber: '',
    cartItems: [],
    address: '',
    totalPrice: 0
  }

  constructor() {}

  addtoCart(product: Product): void {
    const cartProduct = this.cartItems.find((item) => item.id == product.id)
    if (cartProduct?.quantity && product?.quantity) {
      cartProduct.quantity += product.quantity
    } else {
      this.cartItems.push(product)
    }
  }

  getCart(): Product[] {
    return this.cartItems
  }

  // updateCart will replace the items quantity with the quantity of the item
  // passed in if it exists in the cart. This is used from the cart component
  updateCart(updatedItem: Product): Product[] {
    const cartProduct = this.cartItems.find((item) => item.id == updatedItem.id)
    if (cartProduct?.quantity && updatedItem?.quantity) {
      cartProduct.quantity = updatedItem.quantity
    }
    return this.cartItems
  }

  removeItem(cartItem: Product): Product[] {
    // filter out cart items based on the product that is passed in
    this.cartItems = this.cartItems.filter(
      (product) => product.id != cartItem.id
    )
    // return a product array with the product removed
    return this.cartItems
  }

  // setOrderInfo will take an order info objects at set it into the cart services local variable
  setOrderInfo(orderInfo: OrderInfo): void {
    this.orderInfo = orderInfo
  }

  // getOrderINfo will return the object within the local orderInfo variable
  getOrderInfo(): OrderInfo {
    return this.orderInfo
  }

  // emptyCart can be called to remove all items from a cart. This is done once an order is submitted.
  emptyCart(): Product[] {
    this.cartItems = []
    return this.cartItems
  }
}
