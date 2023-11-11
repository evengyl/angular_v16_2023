import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bindings1Component } from './demos/bindings1/bindings1.component';
import { Pipes2Component } from './demos/pipes2/pipes2.component';
import { Directives3Component } from './demos/directives3/directives3.component';
import { TopPlayersComponent } from './demos/inputoutput4/top-players/top-players.component';
import { FourOfourComponent } from './demos/fourOfour5/four-ofour.component';
import { DependencyInjection6Component } from './demos/dependecyInjection6/services6.component';
import { AdvanceRoutage7Component } from './demos/advanceRoutage7/advance-routage7.component';
import { SubRoutageComponent } from './demos/advanceRoutage7/subCompoRoutage/sub-routage.component';

const routes: Routes = [
  { path : "", component : Bindings1Component },
  { path : 'bindings1', component: Bindings1Component},
  { path : "pipes2", component : Pipes2Component},
  { path : "directives3", component : Directives3Component},
  { path : "inputoutput4", component : TopPlayersComponent},
  { path : "dependencyinjection6", component : DependencyInjection6Component},
  { path : "advanceroutage7", component : AdvanceRoutage7Component},
  { path : "subroutage", children : [
      { path : "", component : SubRoutageComponent},
      { path : ":id", component : SubRoutageComponent}
    ]
  },


  { path : "**", component : FourOfourComponent}

 ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
