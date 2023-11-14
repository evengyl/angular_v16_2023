import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesValidator } from './validators/checkCountry.validator';

@Component({
  selector: 'app-validatorasync13',
  templateUrl: './validatorasync13.component.html'
})
export class ValidatorAsync13Component{

  public myForm! : FormGroup

  constructor(private fb : FormBuilder, private http : HttpClient) {
    this.generateForm()
  }

  generateForm()
  {
    this.myForm = this.fb.group(
      { pays : ['', [Validators.required], CountriesValidator.checkCountry(this.http)] }
    )
  }


  submitForm()
  {
      console.log(this.myForm)
  }

  echoVisu()
  {
    console.log(this.myForm)
  }

  validCountry(){
    if(this.myForm.controls["pays"].invalid)
      return "is-invalid"
    else
      return "is-valid"
  }

}
