import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit, OnChanges {

  @Input() name : string
  @Input() price : number
  @Input() id : number

  @Output() deleteProduct : EventEmitter<number> = new EventEmitter<number>()
  @Output() updateProduct : EventEmitter<object> = new EventEmitter<object>()

  newPrice : number = undefined

  constructor() {
  }

  ngOnInit(): void {
    console.log("on init")
  }

  ngOnChanges(){
    this.newPrice = this.price

    console.log("on change")
  }



  

  onClickDelete(id : number) : void{
    this.deleteProduct.emit(id)
  }

  onClickUpdate(id : number) : void
  {
    this.updateProduct.emit({id : id, newPrice : this.newPrice})
  }

}
