import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-advance-routage7',
  templateUrl: './advance-routage7.component.html',
  styleUrls: ['./advance-routage7.component.css']
})
export class AdvanceRoutage7Component {

  constructor(private router : Router) { }

  navigate()
  {
    this.router.navigate(["subroutage"])
  }

  navigateParams()
  {
    this.router.navigate(["subroutage/42"])
  }

  navigateQuery()
  {
    this.router.navigate(["subroutage"], { queryParams : {"name" : "loic"} })

  }
}
