import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-light-switch-shape',
  templateUrl: './light-switch-shape.component.html',
  styleUrls: ['./light-switch-shape.component.scss']
})
export class LightSwitchShapeComponent {

  @Input() COLOURS!: string[];
  @Input() activeColor!: string;
  @Input() power!: boolean;

}
