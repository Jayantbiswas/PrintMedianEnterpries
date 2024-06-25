import { Injectable } from '@angular/core';

const products = 'product';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  constructor() {}

  public setProduct(product: any) {
    console.log(product);
    window.localStorage.setItem(products, JSON.stringify(product));
  }

  public getProduct() {
    const product = localStorage.getItem(products);
    console.log(product);
    return JSON.parse(product);
  }
}
