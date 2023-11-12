import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from './validators/email.validator';
import { confirmPasswordValidator } from './validators/confirmPassword.validator';

@Component({
  selector: 'app-reactive-forms10',
  templateUrl: './reactive-forms10.component.html'
})
export class ReactiveForms10Component {

  name : string = "Tutu"
  email : string = "tutu@tutu.be"
  password : string = "test1234"
  gender : string = "other"

  sendTWB(){
    console.log(this.name)
    console.log(this.email)
    console.log(this.password)
    console.log(this.gender)
  }

  myForm : FormGroup = new FormGroup({})

  constructor(private fb : FormBuilder)
  {

    this.myForm = this.fb.group(
      {
        name : ["", [Validators.minLength(3), Validators.maxLength(20), Validators.required]],
        email : ['', [emailValidator]],
        password : ["te34", [Validators.minLength(6), Validators.maxLength(15), Validators.required]],
        passwordConfirm : ["", [Validators.minLength(6), Validators.maxLength(15), Validators.required]],
        gender : ["male", [ Validators.required]]
      },
      {
        validators : confirmPasswordValidator
      }
    )

  }

  sendRF(){
    console.log(this.myForm)

    if(this.myForm.valid)
    {
      //envoie vers la db !!!!
    }
  }

  seeMyForm(){
    console.log(this.myForm)
  }



}
