import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentCommunicationPageComponent } from './pages/component-communication-page/component-communication-page.component';
import { FatherComponentComponent } from './components/father-component/father-component.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';



@NgModule({
  declarations: [
    ComponentCommunicationPageComponent,
    FatherComponentComponent,
    ChildComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentCommunicationModule { }
