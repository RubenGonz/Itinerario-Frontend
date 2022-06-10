import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-light-switch-controller',
  templateUrl: './light-switch-controller.component.html',
  styleUrls: ['./light-switch-controller.component.scss']
})
export class LightSwitchControllerComponent implements OnInit {

  @Input() COLOURS!: string[];
  @Output() onActiveColorChange: EventEmitter<string> = new EventEmitter();
  @Output() onPowerChange: EventEmitter<boolean> = new EventEmitter();

  activeColor: string = "red";
  power: boolean = false;

  automaticMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(newColor: string) {
    this.activeColor = newColor;
    this.onActiveColorChange.emit(newColor);
  }

  changeToNextColor() {
    let indice = this.COLOURS.indexOf(this.activeColor);
    indice == (this.COLOURS.length - 1) ? this.changeColor(this.COLOURS[0]) : this.changeColor(this.COLOURS[indice + 1]);
  }

  startAutomaticMode() {
    this.automaticMode = true
    this.changeToNextColor();
    setTimeout(() => {
      if (this.automaticMode == true) {
        this.startAutomaticMode();
      }
    }, 1500);
  }

  stopAutomaticMode() {
    this.automaticMode = false;
  }

  turnOnLightSwitch() {
    this.power = true;
    this.onPowerChange.emit(true);
  }

  turnOffLightSwitch() {
    this.power = false;
    this.onPowerChange.emit(false);
    this.stopAutomaticMode();
  }

}
