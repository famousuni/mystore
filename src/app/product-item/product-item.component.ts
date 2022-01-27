import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Product } from '../models/product'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Product
  @Output() addToCart: EventEmitter<Product> = new EventEmitter()

  quantity: number = 1
  quantityrange: number[] = [1, 2, 3, 4, 5]
  constructor() {
    this.productItem = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      quantity: 0,
      description: ''
    }
  }

  ngOnInit(): void {}

  //submitAddtoCart will update the create a new product object with quantity and emit it as an event to the parent (Product-List)
  submitAddToCart(): void {
    const product = {
      quantity: this.quantity,
      id: this.productItem.id,
      description: this.productItem.description,
      url: this.productItem.url,
      price: this.productItem.price,
      name: this.productItem.name
    }
    this.addToCart.emit(product)
    alert(`${product.name} x ${product.quantity} added to cart!`)
    //reset the form value
    this.quantity = 1
  }
}
