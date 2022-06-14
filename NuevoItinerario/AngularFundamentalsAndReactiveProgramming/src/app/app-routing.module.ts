import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home/home-page/home-page.component';
import { DisplayHidePageComponent } from './display-hide/display-hide-page/display-hide-page.component';
import { SearchOnTypePageComponent } from './search-on-type/pages/search-on-type-page/search-on-type-page.component';
import { LightSwitchPageComponent } from './light-switch/pages/light-switch-page/light-switch.component';
import { ExternalLibreriesPageComponent } from './external-libreries/external-libreries-page/external-libreries-page.component';
import { CounterPageComponent } from './counter/counter-page/counter-page.component';
import { ComponentCommunicationPageComponent } from './component-communication/pages/component-communication-page/component-communication-page.component';

const routes: Routes = [
  { path: "", redirectTo:"home", pathMatch: "full" },
  { path: "home", component: HomePageComponent },
  { path: "display_hide", component: DisplayHidePageComponent },
  { path: "component_communication", component: ComponentCommunicationPageComponent },
  { path: "crud", component: HomePageComponent },
  { path: "search_on_type", component: SearchOnTypePageComponent },
  { path: "light_switch", component: LightSwitchPageComponent },
  { path: "external_libreries", component: ExternalLibreriesPageComponent },
  { path: "counter", component: CounterPageComponent },
  { path: "**", redirectTo:"" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
