import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LightSwitchPageComponent } from './pages/light-switch-page/light-switch.component';



@NgModule({
  declarations: [
    LightSwitchPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LightSwitchModule { }
