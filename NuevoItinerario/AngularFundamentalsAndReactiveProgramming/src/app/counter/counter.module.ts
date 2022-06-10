import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterPageComponent } from './counter-page/counter-page.component';
import { ToSecondsPipe } from './pipes/to-seconds.pipe';



@NgModule({
  declarations: [
    CounterPageComponent,
    ToSecondsPipe
  ],
  imports: [
    CommonModule
  ]
})
export class CounterModule { }
