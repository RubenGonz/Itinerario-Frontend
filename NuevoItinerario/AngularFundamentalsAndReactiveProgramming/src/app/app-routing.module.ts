import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CounterComponent } from './counter/counter/counter.component';
import { DisplayHideComponent } from './display-hide/display-hide/display-hide.component';
import { HomeComponent } from './home/home/home.component';
import { SearchOnTypeComponent } from './search-on-type/search-on-type/search-on-type.component';

const routes: Routes = [
  { path: "", redirectTo:"home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "display_hide", component: DisplayHideComponent },
  { path: "component_communication", component: HomeComponent },
  { path: "crud", component: HomeComponent },
  { path: "search_on_type", component: SearchOnTypeComponent },
  { path: "light_switch", component: HomeComponent },
  { path: "external_libreries", component: HomeComponent },
  { path: "counter", component: CounterComponent },
  { path: "**", redirectTo:"" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
