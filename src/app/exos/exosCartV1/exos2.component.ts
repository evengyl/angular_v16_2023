import { Component, OnInit } from '@angular/core';
import { article } from './article.model';

@Component({
  selector: 'app-exos2',
  templateUrl: './exos2.component.html'
})
export class Exos2Component implements OnInit {

  maListe : article[] = undefined
  newArtName : string = undefined
  newArtQty : number = undefined

  element : string = ""

  constructor() {
    this.maListe = []
  }

  ngOnInit(): void {
    
    let fakeArt : article = { name : "pommes", qty : 1, dateAdd : new Date() }
    let fakeArt3 : article = { name : "plumes", qty : 3, dateAdd : new Date() }
    let fakeArt4 : article = { name : "pdt", qty : 5, dateAdd : new Date() }
    
    let fakeArt2 = new article
    fakeArt2.name = "poire"
    fakeArt2.qty = 4
    fakeArt2.dateAdd = new Date()

    this.maListe.push(fakeArt)
    this.maListe.push(fakeArt2)
    this.maListe.push(fakeArt3)
    this.maListe.push(fakeArt4)
    
  }

  addToCart() : void{
    let newArt : article = { name : this.newArtName, qty : this.newArtQty, dateAdd : new Date()}
    let okAjout : boolean = true

    this.maListe.forEach((item) => {
      if(item.name == this.newArtName)
      {
        okAjout = false

        if((item.qty + this.newArtQty) <= 5){
          item.qty = item.qty + this.newArtQty
          item.dateAdd = new Date()
        }
      }
      
    })

    if(okAjout)
      this.maListe.push(newArt)
  }


  delToCart(artToDelete : string) : void{

    this.maListe = this.maListe.filter((item) => {
      if(item.name !=  artToDelete)
        return item
      return false
    })

  }
}
