import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolvers14',
  templateUrl: './resolvers14.component.html'
})
export class Resolvers14Component implements OnInit {

  listCountries : any[]

  constructor(private route : ActivatedRoute) {
    this.listCountries = this.route.snapshot.data["datas"]
  }

  ngOnInit(): void {
  }

}
