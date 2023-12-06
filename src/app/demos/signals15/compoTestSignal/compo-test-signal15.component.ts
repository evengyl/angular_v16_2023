import { Component, WritableSignal, signal, computed, Signal } from '@angular/core';
import { Signals15Service } from '../signals15.service';

@Component({
  selector: 'app-compo-test-signal15',
  templateUrl: './compo-test-signal15.component.html'
})
export class CompoTestSignalsComponent {

  count : WritableSignal<number>
  
  price : WritableSignal<number>
  qty : WritableSignal<number>
  total : Signal<number>

  val : WritableSignal<{value : number, name : string}>

  constructor(private signalServe : Signals15Service){

    this.count = this.signalServe.count

    this.price = this.signalServe.price
    this.qty = this.signalServe.qty
    this.total = this.signalServe.total

    this.val = this.signalServe.val
  }

  initSignal(){
    //le signal peux être set à partir de sont service comme dans increment()
    //mais aussi directement dans le compo ! il sera tout aussi réactif !!! voir decrement()
    //dans le service la version courte de la callback et dans decrement() la version longue de la callback
    this.count.set(1000)
  }
  
  increment(): void {
    this.signalServe.increment()
  }

  decrement(): void {
    this.count.update((c : number) => {
      console.log(c)
      c = c - 1
      return c
    });
  }

  increasePrice(){
    this.price.update((p : number) => p + 289)
  }


  mutateSignal(){
    this.signalServe.test()
  }


}
