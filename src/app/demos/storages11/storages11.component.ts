import { Component } from '@angular/core';

@Component({
  selector: 'app-storages11',
  templateUrl: './storages11.component.html'
})
export class Storages11Component{

  token_ss : string = ""
  userId_ss : string = ""
  userInfos_ss : any = ""


  token_ls : string = ""
  userId_ls : string = ""
  userInfos_ls : any = ""

  constructor() {

    console.log(sessionStorage)

    let token_ss = sessionStorage.getItem('Token')
    if(token_ss) this.token_ss = token_ss

    let userId_ss = sessionStorage.getItem('UserId')
    if(userId_ss) this.userId_ss = userId_ss


    let userInfos_ss = sessionStorage.getItem('UserInfos')
    if(userInfos_ss) this.userInfos_ss = JSON.parse(userInfos_ss)



    let token_ls = localStorage.getItem('Token')
    if(token_ls) this.token_ls = token_ls

    let userId_ls = localStorage.getItem('UserId')
    if(userId_ls) this.userId_ls = userId_ls


    let userInfos_ls = localStorage.getItem('UserInfos')
    if(userInfos_ls) this.userInfos_ls = JSON.parse(userInfos_ls)

  }

  removeSession()
  {
    sessionStorage.removeItem("Token")
    sessionStorage.removeItem("UserId")
    sessionStorage.removeItem("UserInfos")

    console.log(sessionStorage)
  }


  clearSession()
  {
    sessionStorage.clear()

    console.log(sessionStorage)
  }

  populateSession()
  {
    sessionStorage.setItem("Token", "tututototata")
    sessionStorage.setItem("UserId", "42")
    
    let objectTest = {
      firstName : "Loïc",
      lastName : "Baudoux"
    }
    sessionStorage.setItem("UserInfos", JSON.stringify(objectTest))
  }



  removeLocal()
  {
    localStorage.removeItem("Token")
    localStorage.removeItem("UserId")
    localStorage.removeItem("UserInfos")

    console.log(localStorage)
  }


  clearLocal()
  {
    localStorage.clear()

    console.log(localStorage)
  }

  populateLocal()
  {
    localStorage.setItem("Token", "tututototata")
    localStorage.setItem("UserId", "42")
    
    let objectTest = {
      firstName : "Loïc",
      lastName : "Baudoux"
    }
    localStorage.setItem("UserInfos", JSON.stringify(objectTest))
  }



}
