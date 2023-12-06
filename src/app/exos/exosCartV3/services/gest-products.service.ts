import { Injectable } from '@angular/core';
import { fillMokup, product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class GestProductsService {

  listProd : product[] = []

  constructor() {
    this.listProd = fillMokup()
  }

  deleteProduct(id : number) : product[]
  {
    this.listProd = this.listProd.filter((item) => {
      if(item.id != id)
        return item
      return false
    })

    return this.listProd
  }

  updateProduct(data : any) : product[]
  {
    this.listProd = this.listProd.filter((item) => {
      if(item.id == data.id){
        item.price = data.newPrice
      }
      return item
    })

    return this.listProd
  }


  addProduct(product : product) : product[]{
    this.listProd.push(product)
    return this.listProd
  }

}
