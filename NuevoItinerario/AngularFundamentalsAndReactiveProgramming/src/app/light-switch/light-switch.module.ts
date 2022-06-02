import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightSwitchComponent } from './light-switch/light-switch.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LightSwitchComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LightSwitchModule { }
