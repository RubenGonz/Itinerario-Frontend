import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { ToSecondsPipe } from './pipes/to-seconds.pipe';



@NgModule({
  declarations: [
    CounterComponent,
    ToSecondsPipe
  ],
  exports: [
    CounterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CounterModule { }
