import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakePromiseService {

  getDatasFakeV1()
  {
      return new Promise((resolve, reject) => {
          // setTimeout(() => {
          //     resolve({ name : "loic"})
          // }, 500)

          setTimeout(() => {
              reject({ err : "Pignouf"})
          }, 500)
      })
  }


  getDatasFakeV2()
  {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve({ name : "loic"})
          }, 500)
      })
  }


  getDatasFakeV3()
  {
      let promiseV3 = new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve({ name : "loic"})
          }, 500)
      })

      //je la stock, comme ça je peux faire DANS LE SERVICE des trucs...
      return promiseV3
  }


  getDatasFakeV4()
  {
      let promiseV4_1 = new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve({ name : "loic"})
          }, 1000)
      })

      let promiseV4_2 = new Promise((resolve, reject) => {
          setTimeout(() => {
              reject({ name : "brian"})
          }, 2000)
      })

      let promiseV4_3 = new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve({ name : "georgio"})
          }, 3000)
      })


      //le promise all permet de renvoyer plusieurs résultat de promesse, en les attendant TOUTE
      //Si un CATCH (reject) est détécté, il reject ALL !!! 
      //c'est logique, si vous fiate un promise all c'est que les datas sont liée entre elles d'une manière ou d'une autre
      //donc, si une est mauvaise, elle le sont toute
      return Promise.all([promiseV4_1, promiseV4_2, promiseV4_3])

  }


  getDatasFakeV5()
  {
      let promiseV5_1 = new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve({ name : "loic"})
          }, 500)
      })

      let promiseV5_2 = new Promise((resolve, reject) => {
          setTimeout(() => {
              reject({ name : "brian"})
          }, 1000)
      })

      let promiseV5_3 = new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve({ name : "georgio"})
          }, 1500)
      })
      //le race renvoie le premier resolve ou reject détécté
      return Promise.race([promiseV5_1, promiseV5_2, promiseV5_3])

  }


  //async await
  async getDatasFakeV6()
  {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve({ name : "loic"})
          }, 500)

          // setTimeout(() => {
          //     reject({ err : "Pignouf"})
          // }, 500)
      })
  }


  //async await
  async getDatasFakeV7()
  {
      let datasResolve : any = await new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve({ name : "loic"})
          }, 500)

          // setTimeout(() => {
          //     reject({ err : "Pignouf"})
          // }, 500)
      })

      //travail sur les datasResolve.... bla bla
      datasResolve.name = "Julie"
      return datasResolve
  }

  //async =============== return new promise(() => {})
  //await =============== .then(() => {})
}
