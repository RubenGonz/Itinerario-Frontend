import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchOnTypeComponent } from './search-on-type/search-on-type.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchOnTypeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SearchOnTypeModule { }
