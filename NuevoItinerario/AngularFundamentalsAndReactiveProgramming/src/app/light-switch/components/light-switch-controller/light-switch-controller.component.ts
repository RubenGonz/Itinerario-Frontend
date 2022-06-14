import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LightSwitchService } from '../../service/light-switch.service';

@Component({
  selector: 'app-light-switch-controller',
  templateUrl: './light-switch-controller.component.html',
  styleUrls: ['./light-switch-controller.component.scss']
})
export class LightSwitchControllerComponent implements OnInit {

  //Variables
  COLOURS?: string[];
  activeColor?: string;
  power?: boolean;
  automaticMode?: boolean;

  /**
   * Constructor que inicializa el servicio
   * @param lightSwitchService servicio del semaforo
   */
  constructor(private lightSwitchService: LightSwitchService) { }

  /**
   * Metodo que al inicializar el componente 
   * obtiene los valores del servicio
   */
  ngOnInit() {
    this.COLOURS = this.lightSwitchService.COLOURS;
    this.lightSwitchService.activeColor.subscribe(activeColor => this.activeColor = activeColor);
    this.lightSwitchService.power.subscribe(power => this.power = power);
    this.lightSwitchService.automaticMode.subscribe(automaticMode => this.automaticMode = automaticMode);
  }

  /**
   * Metodo que cambia el color
   * @param newColor nuevo color
   */
  changeColor(newColor: string) {
    this.lightSwitchService.changeColor(newColor);
  }

  /**
   * Metodo que hace cambiar el color 
   * automaticamete tras poco tiempo
   */
  startAutomaticMode() {
    this.lightSwitchService.startAutomaticMode();
  }

  /**
   * Metodo que para el cambio de color automatico
   */
  stopAutomaticMode() {
    this.lightSwitchService.stopAutomaticMode();
  }

  /**
   * Metodo que activa las funciones del semaforo
   */
  turnOnLightSwitch() {
    this.lightSwitchService.turnOnLightSwitch();
  }

  /**
   * Metodo que desactiva las funciones del semaforo
   */
  turnOffLightSwitch() {
    this.lightSwitchService.turnOffLightSwitch();
  }

}
