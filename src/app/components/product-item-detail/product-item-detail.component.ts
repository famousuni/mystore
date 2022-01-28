import { Component, OnInit } from '@angular/core'
import { Product } from '../../models/product'
import { ProductService } from '../../services/product.service'
import { CartService } from '../../services/cart.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  productItem!: Product
  quantity: number = 1
  quantityrange: number[] = [1, 2, 3, 4, 5]
  id: number = 0

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    this.productItem = this.productService.getProductByID(this.id)
  }

  submitAddToCart(productItem: Product): void {
    let product: Product = {
      id: productItem.id,
      name: productItem.name,
      price: productItem.price,
      url: productItem.url,
      description: productItem.description,
      quantity: this.quantity
    }
    this.cartService.addtoCart(product)
    alert(`${product.name} x ${product.quantity} added to cart!`)
    this.quantity = 1
  }
}
