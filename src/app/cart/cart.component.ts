import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product'
import { CartService } from "../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productsInCart: Product[] = []
  totalPrice: number = 0

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.productsInCart = this.cartService.getCart()
    this.totalPrice = this.getTotalPrice()
  }

  // updateCart replaces the value of qty for a given item within the cart, this is bound to the cart pages qty
  updateCart(cartItem: Product) {
    this.productsInCart = this.cartService.updateCart(cartItem)
    console.log(this.productsInCart)
    this.totalPrice = 0
    this.totalPrice = this.getTotalPrice()
  }

  // removeItem is called from the cart page and will remove the item from the productsInCart list via the cart service
  removeItem(cartItem: Product) {
    this.productsInCart = this.cartService.removeItem(cartItem)
    console.log(this.productsInCart)
    this.totalPrice = this.getTotalPrice()
    alert(`${cartItem.name} has been removed from your cart!`)
  }

  // getTotalPrice is a helper function so the cart component can
  // dynamically calculate the total price of items in the cart
  getTotalPrice(): number {
    let totalPrice = 0
    for (let i = 0; i < this.productsInCart.length; i++) {
      let quantity = this.productsInCart[i].quantity
      if (!quantity) {
        quantity = 1
      }
      totalPrice += this.productsInCart[i].price * quantity
    }
    return totalPrice
  }


}
