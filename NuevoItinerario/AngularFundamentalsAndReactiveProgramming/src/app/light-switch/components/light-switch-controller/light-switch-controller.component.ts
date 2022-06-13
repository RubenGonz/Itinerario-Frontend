import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LightSwitchService } from '../../service/light-switch.service';

@Component({
  selector: 'app-light-switch-controller',
  templateUrl: './light-switch-controller.component.html',
  styleUrls: ['./light-switch-controller.component.scss']
})
export class LightSwitchControllerComponent implements OnInit {

  COLOURS?: string[];
  activeColor?: string;
  power?: boolean;
  automaticMode?: boolean;

  constructor(private lightSwitchService: LightSwitchService) { }

  ngOnInit() {
    this.COLOURS = this.lightSwitchService.COLOURS;
    this.lightSwitchService.activeColor.subscribe(activeColor => this.activeColor = activeColor);
    this.lightSwitchService.power.subscribe(power => this.power = power);
    this.lightSwitchService.automaticMode.subscribe(automaticMode => this.automaticMode = automaticMode);
  }

  changeColor(newColor: string) {
    this.lightSwitchService.changeColor(newColor);
  }

  startAutomaticMode() {
    this.lightSwitchService.startAutomaticMode();
  }

  stopAutomaticMode() {
    this.lightSwitchService.stopAutomaticMode();
  }

  turnOnLightSwitch() {
    this.lightSwitchService.turnOnLightSwitch();
  }

  turnOffLightSwitch() {
    this.lightSwitchService.turnOffLightSwitch();
  }

}
