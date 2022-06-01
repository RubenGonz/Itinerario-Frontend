import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CounterModule } from './counter/counter.module';
import { SearchOnTypeModule } from './search-on-type/search-on-type.module';
import { DisplayHideModule } from './display-hide/display-hide.module';

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
    DisplayHideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
