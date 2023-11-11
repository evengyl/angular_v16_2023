import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-routage',
  templateUrl: './sub-routage.component.html'
})
export class SubRoutageComponent {
  
  myParams : string = ""
  myQuery : string = ""
  
  constructor(private activateRoute : ActivatedRoute) { 

    console.log(this.activateRoute)

    if(this.activateRoute.snapshot.params["id"])
      this.myParams = this.activateRoute.snapshot.params["id"]
    
    if(this.activateRoute.snapshot.queryParams["name"])
      this.myQuery = this.activateRoute.snapshot.queryParams["name"]
  }
}
