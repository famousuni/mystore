import { Injectable } from '@angular/core'
import { Product } from '../models/product'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: Product[] = []


  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('../assets/data.json')
  }

  // getProductByID takes in an number and returns the corresponding Product object
  getProductByID(productID: number): Product {
    let product = this.productList.find(
      (productlistitem) => productlistitem.id == productID
    ) as Product
    return product
  }
}
