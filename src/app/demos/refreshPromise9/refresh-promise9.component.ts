import { Component } from '@angular/core';
import { FakePromiseService } from './services/fake-promise.service';

@Component({
  selector: 'app-refresh-promise9',
  templateUrl: './refresh-promise9.component.html'
})
export class RefreshPromise9Component{

  
  datasV1 : any = {}
  datasV4 : any = {}
  datasV5 : any = {}
  datasV6 : any = {}
  datasV7 : any = {}

  errorsV1 : any = {}
  errorsV4 : any = {}
  errorsV5 : any = {}
  errorsV6 : any = {}

  constructor(private rePromiseServe : FakePromiseService){

    //exec direct
    this.rePromiseServe.getDatasFakeV1()
    .then((datas : any) => {
      this.datasV1 = datas
    })
    .catch((err : any) => {
      this.errorsV1 = err
    })


    //exec différée stockage de la promesse
    let promiseTemp = this.rePromiseServe.getDatasFakeV2()
    //apres tutu toto et on sait pas quoi
    promiseTemp.then(() => {})


    //cette fois-ci on l'a stockée dans le service
    let promiseTempV3 = this.rePromiseServe.getDatasFakeV3()
    promiseTempV3.then(() => {})


    this.rePromiseServe.getDatasFakeV4()
    .then((datas : any) => {
      this.datasV4 = datas
    })
    .catch((err : any) => {
      this.errorsV4 = err
    })


    this.rePromiseServe.getDatasFakeV5()
    .then((datas : any) => {
      this.datasV5 = datas
    })
    .catch((err : any) => {
      this.errorsV5 = err
    })


    this.getDatasFakeV6()
    this.getDatasFakeV7()

  }


  async getDatasFakeV6(){
    
    let datas = await this.rePromiseServe.getDatasFakeV6()
    //le await n'est que le RESOLVE !!!!
    this.datasV6 = datas

  }


  
  async getDatasFakeV7(){
    
    let datas = this.rePromiseServe.getDatasFakeV7()
    //le await n'est que le RESOLVE !!!!
    this.datasV7 = await datas

  }


}
