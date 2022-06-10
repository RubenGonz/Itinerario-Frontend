import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LightSwitchPageComponent } from './pages/light-switch-page/light-switch.component';
import { LightSwitchShapeComponent } from './components/light-switch-shape/light-switch-shape.component';
import { LightSwitchControllerComponent } from './components/light-switch-controller/light-switch-controller.component';



@NgModule({
  declarations: [
    LightSwitchPageComponent,
    LightSwitchShapeComponent,
    LightSwitchControllerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LightSwitchModule { }
