import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, interval, of, from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FakeLogin17Service {
  
  isConnect : boolean = false

  simpleOf$ : Observable<number>
  emitterOf : number = 42

  simpleFrom$ : Observable<string>
  emitterFrom : string[] = ["tutu", "toto", "tata"]

  simpleInterval$ : Observable<number>

  mySubject$ : Subject<boolean> = new Subject<boolean>()


  myString1 = "Je suis emit du subject"
  myString2 = "je suis emit du behavior subject"

  myVar1$ : Subject<string> = new Subject<string>()
  myVar2$ : BehaviorSubject<string> = new BehaviorSubject<string>("Bonjour je suis le first next du BS")

  constructor() {
    this.simpleOf$ = of(this.emitterOf)

    this.simpleFrom$ = from(this.emitterFrom)

    this.simpleInterval$ = interval(1000)
  }

  emitMyString()
  {
    this.myVar1$.next(this.myString1)
    this.myVar2$.next(this.myString2)
  }

  emitIsConnect()
  {
    this.mySubject$.next(this.isConnect)
  }

  reEmitOf(nb : number)
  {
    this.simpleOf$ = of(nb).pipe(
      map(x => x*2)
    )
  }

  
  login()
  {
    this.isConnect = true
    this.emitIsConnect()
  }

  logout()
  {
    this.isConnect = false
    this.emitIsConnect()
  }
}
