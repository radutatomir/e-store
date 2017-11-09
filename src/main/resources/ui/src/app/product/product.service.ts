import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Product} from "./product";

@Injectable()
export class ProductService {

  constructor(private http:HttpClient) { }

  public getProducts() : Observable<any> {
    return this.http.get('/store/api/products');
  }

  public saveProduct(product : Product) : Observable<any> {
    return this.http.post('/store/api/products', product);
  }

  public getProduct(id : number) : Observable<any> {
    return this.http.get(`/store/api/products/${id}`);
  }

  public updateProduct(product : Product) : Observable<any> {
    return this.http.patch(`/store/api/products/${product.id}`, product);
  }

  public deleteProduct(product : Product) : Observable<any> {
    return this.http.delete(`/store/api/products/${product.id}`);
  }

}
