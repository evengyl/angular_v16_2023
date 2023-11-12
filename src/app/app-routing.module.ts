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
import { Demo8guardedComponent } from './demos/guards8/demo8guarded/demo8guarded.component';
import { loginGuard } from './demos/guards8/guard/login.guard';
import { Guards8Component } from './demos/guards8/guards8.component';
import { RefreshPromise9Component } from './demos/refreshPromise9/refresh-promise9.component';
import { ReactiveForms10Component } from './demos/reactiveForms10/reactive-forms10.component';
import { Storages11Component } from './demos/storages11/storages11.component';

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
  { path : "guards8", component : Guards8Component},
  { path : "guards8/privatecompoguarded", canActivate : [loginGuard], component : Demo8guardedComponent},
  { path : "refreshpromise9", component : RefreshPromise9Component},
  { path : "reactiveforms10", component : ReactiveForms10Component},
  { path : "storages11", component : Storages11Component},




  { path : "**", component : FourOfourComponent}

 ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
