import { Component, OnInit } from '@angular/core'
import { Product } from '../models/product'
import { ProductService } from '../services/product.service'
import { CartService } from '../services/cart.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}
  title: string = 'Products'
  products: Product[] = []

  ngOnInit(): void {
    this.products = this.productService.getProducts()
  }

  // addToCart will receive the event emitted from product-item and pass it to the cart service's addtocart method
  addToCart(product: Product): void {
    this.cartService.addtoCart(product)
  }
}
