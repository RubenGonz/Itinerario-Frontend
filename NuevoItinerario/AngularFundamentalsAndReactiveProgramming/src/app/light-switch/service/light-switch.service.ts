import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LightSwitchService {

  //Variables
  private _COLOURS: string[] = ["red", "orange", "lightgreen"];
  private activeColor$ = new BehaviorSubject<string>(this.COLOURS[0]);
  private power$ = new BehaviorSubject<boolean>(false);
  private automaticMode$ = new BehaviorSubject<boolean>(false);

  //Getters
  get COLOURS() { return [...this._COLOURS]; }
  get activeColor(): Observable<string> { return this.activeColor$.asObservable(); }
  get power(): Observable<boolean> { return this.power$.asObservable(); }
  get automaticMode(): Observable<boolean> { return this.automaticMode$.asObservable(); }

  /**
   * Metodo que cambia el color
   * @param newColor nuevo color
   */
  changeColor(newColor: string) { this.activeColor$.next(newColor); }

  /**
   * Metodo que cambia al siguiente color
   */
  changeToNextColor() {
    let indice = this._COLOURS.indexOf(this.activeColor$.getValue());
    indice == (this._COLOURS.length - 1) ? this.changeColor(this._COLOURS[0]) : this.changeColor(this._COLOURS[indice + 1]);
  }

  /**
   * Metodo que hace cambiar el color 
   * automaticamete tras poco tiempo
   */
  startAutomaticMode() {
    this.automaticMode$.next(true);
    this.changeToNextColor();
    setTimeout(() => {
      if (this.automaticMode$.getValue() == true) {
        this.startAutomaticMode();
      }
    }, 1500);
  }

  /**
   * Metodo que para el cambio de color automatico
   */
  stopAutomaticMode() { this.automaticMode$.next(false); }

  /**
   * Metodo que activa las funciones del semaforo
   */
  turnOnLightSwitch() { this.power$.next(true); }

  /**
   * Metodo que desactiva las funciones del semaforo
   */
  turnOffLightSwitch() {
    this.power$.next(false);
    this.stopAutomaticMode();
  }

}
