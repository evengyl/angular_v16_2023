import { LOCALE_ID, NgModule } from '@angular/core';
import localFr from "@angular/common/locales/fr-BE";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bindings1Component } from './demos/bindings1/bindings1.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Pipes2Component } from './demos/pipes2/pipes2.component';
import { CustomPowPipe } from './demos/pipes2/custom-pipe-pow.pipe';
import { registerLocaleData } from '@angular/common';
import { Directives3Component } from './demos/directives3/directives3.component';
import { ZoomitDirective, ZoomitEventDirective, ZoomitEventParamsDirective } from './demos/directives3/custom/zoomit.directive';
import { TopPlayersComponent } from './demos/inputoutput4/top-players/top-players.component';
import { PlayerComponent } from './demos/inputoutput4/player/player.component';
import { FourOfourComponent } from './demos/fourOfour5/four-ofour.component';
import { DependencyInjection6Component } from './demos/dependecyInjection6/services6.component';
import { AdvanceRoutage7Component } from './demos/advanceRoutage7/advance-routage7.component';
import { SubRoutageComponent } from './demos/advanceRoutage7/subCompoRoutage/sub-routage.component';
import { Guards8Component } from './demos/guards8/guards8.component';
import { Demo8guardedComponent } from './demos/guards8/demo8guarded/demo8guarded.component';
import { RefreshPromise9Component } from './demos/refreshPromise9/refresh-promise9.component';
import { ReactiveForms10Component } from './demos/reactiveForms10/reactive-forms10.component';
import { Storages11Component } from './demos/storages11/storages11.component';
import { HttpObs12Component } from './demos/httpObservable12/httpObs12.component';
import { HttpClientModule } from '@angular/common/http';
import { ValidatorAsync13Component } from './demos/validatorCustomAsync13/validatorasync13.component';
import { Resolvers14Component } from './demos/resolvers14/resolvers14.component';
import { Signals15Component } from './demos/signals15/signals15.component';
import { CompoTestSignalsComponent } from './demos/signals15/compoTestSignal/compo-test-signal15.component';


registerLocaleData(localFr)


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Bindings1Component,
    Pipes2Component,
    CustomPowPipe,
    Directives3Component,
    ZoomitDirective,
    ZoomitEventDirective,
    ZoomitEventParamsDirective,
    TopPlayersComponent,
    PlayerComponent,
    FourOfourComponent,
    DependencyInjection6Component,
    AdvanceRoutage7Component,
    SubRoutageComponent,
    Guards8Component,
    Demo8guardedComponent,
    RefreshPromise9Component,
    ReactiveForms10Component,
    Storages11Component,
    HttpObs12Component,
    ValidatorAsync13Component,
    Resolvers14Component,
    Signals15Component,
    CompoTestSignalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide : LOCALE_ID, useValue : "fr-BE"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
