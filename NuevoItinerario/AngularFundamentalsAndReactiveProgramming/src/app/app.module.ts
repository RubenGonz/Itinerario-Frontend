import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CounterModule } from './counter/counter.module';
import { SearchOnTypeModule } from './search-on-type/search-on-type.module';
import { DisplayHideModule } from './display-hide/display-hide.module';
import { LightSwitchModule } from './light-switch/light-switch.module';
import { ExternalLibreriesModule } from './external-libreries/external-libreries.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    CounterModule,
    SearchOnTypeModule,
    DisplayHideModule,
    LightSwitchModule,
    ExternalLibreriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
