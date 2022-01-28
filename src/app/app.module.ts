import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { ProductListComponent } from './components/product-list/product-list.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { AppRoutingModule } from './app-routing.module'
import { ProductItemComponent } from './components/product-item/product-item.component'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { CartComponent } from './components/cart/cart.component'
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component'
import { ConfirmationComponent } from './components/confirmation/confirmation.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavBarComponent,
    ProductItemComponent,
    CartComponent,
    ProductItemDetailComponent,
    ConfirmationComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
