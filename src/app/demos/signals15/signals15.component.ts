import { Component, Signal, WritableSignal, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals15',
  templateUrl: './signals15.component.html'
})
export class Signals15Component {

  count : WritableSignal<number> = signal(0)

  qty : WritableSignal<number> = signal(4)
  price : WritableSignal<number> = signal(100)
  total : Signal<number> = computed(() => this.price() * this.qty())

  val = signal({
    value : 1,
    name : "tutu"
  })


  increment()
  {
    //update ne fonctionne que sur des valeur par copie
    this.count.update((c : number) => {
      c = c + 1
      return c
    })
  }


  decrement(){
    this.count.update((c : number) => {
      c = c - 1
      return c
    })
  }


  changeQty(){
    this.qty.set(1000)
  }


  changeValueName(){
    this.val.mutate((val) => {
      val.name = "tutu2"
      return val
    })
  }
}
