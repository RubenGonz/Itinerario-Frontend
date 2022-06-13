import { Component, Input, OnInit } from '@angular/core';
import { LightSwitchService } from '../../service/light-switch.service';

@Component({
  selector: 'app-light-switch-shape',
  templateUrl: './light-switch-shape.component.html',
  styleUrls: ['./light-switch-shape.component.scss']
})
export class LightSwitchShapeComponent implements OnInit {

  COLOURS?: string[];
  activeColor?: string;
  power?: boolean;

  constructor(private lightSwitchService: LightSwitchService) { }
  
  ngOnInit() {
    this.COLOURS = this.lightSwitchService.COLOURS;
    this.lightSwitchService.activeColor.subscribe(activeColor => this.activeColor = activeColor);
    this.lightSwitchService.power.subscribe(power => this.power = power);
  }

}
