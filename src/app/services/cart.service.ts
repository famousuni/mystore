import { Injectable } from '@angular/core';
import { OrderProduct } from "../models/order"
import { Product } from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Product[] = []

  constructor() { }

  addtoCart(product: Product): void {
    console.log('cart before add:', this.cartItems)
    console.log('cart sevice qty:', product.quantity)
    const cartProduct = this.cartItems.find(
      (item) => item.id == product.id
    )
    console.log("cart list:", this.cartItems)
    console.log("cart find p:", product)
    if (cartProduct?.quantity && product?.quantity) {
      console.log('p qty', product.quantity)
      console.log('c qty', cartProduct.quantity)
      cartProduct.quantity += product.quantity
    } else {
      console.log('here')
      this.cartItems.push(product)
    }
    console.log(`cart service added ${product.name}`)
    console.log('cart after add:', this.cartItems)
  }

  getCart(): Product[] {
    return this.cartItems
  }

  // updateCart will replace the items quantity with the quantity of the item
  // passed in if it exists in the cart. This is used from the cart component
  updateCart(updatedItem: Product): Product[] {
    const cartProduct = this.cartItems.find(
      (item) => item.id == updatedItem.id
    )
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

}
