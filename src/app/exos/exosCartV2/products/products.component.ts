import { Component, OnInit } from '@angular/core';
import { fillMokup, product } from './models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  listProd : product[] = []

  constructor() {
    /* fake mokup de données */
    this.listProd = fillMokup()
  }

  ngOnInit(): void {
  }

  deleteProductParent(id) : void
  {
    this.listProd = this.listProd.filter((item) => {
      if(item.id != id)
        return item
      return false
    })

    //this.listProd = this.listProd.filter( item => item.id != id )
  }

  updateProductParent(data : any) : void
  {
    this.listProd = this.listProd.filter((item) => {
      if(item.id == data.id){
        item.price = data.newPrice
      }

      return item
    })
  }

  test()
  {
    this.listProd = this.listProd.filter((item) => {
      item.price = item.price * 2
      return item

    })
  }

}
