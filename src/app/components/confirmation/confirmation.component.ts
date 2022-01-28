import { Component, OnInit } from '@angular/core'
import { OrderInfo } from '../../models/order'
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  orderInfo: OrderInfo = {
    fullName: '',
    ccNumber: '',
    cartItems: [],
    address: '',
    totalPrice: 0
  }

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    console.log(this.orderInfo)
    this.orderInfo = this.cartService.getOrderInfo()
    console.log(this.orderInfo)
  }

  ngOnDestroy(): void {}
}
