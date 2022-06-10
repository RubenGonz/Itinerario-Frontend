import { Component } from '@angular/core';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.scss']
})
export class LightSwitchPageComponent {

  //Variables
  colours: string[] = ["red", "orange", "lightgreen"];
  colorOn: string = "red";
  automaticMode: boolean = false;
  lightSwitchOn: boolean = false;

  /**
   * Metodo que cambia el color activo del semaforo
   * @param newColor nombre del color
   */
  changeColor(newColor: string) {
    this.colorOn = newColor;
  }

  /**
   * Metodo que cambia el color activo al siguiente 
   * del array o si es el ultimo, al primero
   */
  changeToNextColor() {
    let indice = this.colours.indexOf(this.colorOn);
    indice == (this.colours.length - 1) ? this.changeColor(this.colours[0]) : this.changeColor(this.colours[indice + 1]);
  }

  /**
   * Metodo que cambia automaticamente al siguiente 
   * color en el caso de que la opcion este activada
   */
  startAutomaticMode() {
    this.automaticMode = true
    this.changeToNextColor();
    setTimeout(() => {
      if (this.automaticMode == true) {
        this.startAutomaticMode();
      }
    }, 1500);
  }

  /**
   * Metodo que para el modo automatico
   */
  stopAutomaticMode() {
    this.automaticMode = false;
  }

  /**
   * Metodo que permite interactuar con el semáforo
   */
  turnOnLightSwitch() {
    this.lightSwitchOn = true;
  }

  /**
   * Metodo que permite interactuar con el semáforo
   */
  turnOffLightSwitch() {
    this.lightSwitchOn = false;
    this.stopAutomaticMode();
  }
}
