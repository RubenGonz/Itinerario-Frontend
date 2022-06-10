import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchOnTypePageComponent } from './pages/search-on-type-page/search-on-type-page.component';
import { FormsModule } from '@angular/forms';
import { BrowserComponent } from './components/browser/browser.component';
import { ResultsComponent } from './components/results/results.component';



@NgModule({
  declarations: [
    SearchOnTypePageComponent,
    BrowserComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SearchOnTypeModule { }
