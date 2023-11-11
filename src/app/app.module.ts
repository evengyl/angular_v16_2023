import { LOCALE_ID, NgModule } from '@angular/core';
import localFr from "@angular/common/locales/fr-BE";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bindings1Component } from './demos/bindings1/bindings1.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
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
    AdvanceRoutage7Component
    ,SubRoutageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide : LOCALE_ID, useValue : "fr-BE"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
