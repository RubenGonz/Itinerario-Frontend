import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LightSwitchService {

  private _COLOURS: string[] = ["red", "orange", "lightgreen"];
  private activeColor$ = new BehaviorSubject<string>(this.COLOURS[0]);
  private power$ = new BehaviorSubject<boolean>(false);
  private automaticMode$ = new BehaviorSubject<boolean>(false);

  get COLOURS() { return [...this._COLOURS]; }
  get activeColor(): Observable<string> { return this.activeColor$.asObservable(); }
  get power(): Observable<boolean> { return this.power$.asObservable(); }
  get automaticMode(): Observable<boolean> { return this.automaticMode$.asObservable(); }

  changeColor(newColor: string) { this.activeColor$.next(newColor); }

  changeToNextColor() {
    let indice = this._COLOURS.indexOf(this.activeColor$.getValue());
    indice == (this._COLOURS.length - 1) ? this.changeColor(this._COLOURS[0]) : this.changeColor(this._COLOURS[indice + 1]);
  }

  startAutomaticMode() {
    this.automaticMode$.next(true);
    this.changeToNextColor();
    setTimeout(() => {
      if (this.automaticMode$.getValue() == true) {
        this.startAutomaticMode();
      }
    }, 1500);
  }

  stopAutomaticMode() { this.automaticMode$.next(false); }

  turnOnLightSwitch() { this.power$.next(true); }

  turnOffLightSwitch() {
    this.power$.next(false);
    this.stopAutomaticMode();
  }

}
