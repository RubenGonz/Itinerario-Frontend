import { Component } from '@angular/core';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.scss']
})
export class LightSwitchPageComponent {

  COLOURS: string[] = ["red", "orange", "lightgreen"];
  activeColor: string = "red";
  power: boolean = false;

}
