import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})

export class CounterComponent {

  // Variables
  step: number = 1;
  actualNumber: number = 0;
  private counting: boolean = false;
  private ascendentCount = true;
  timeGap: number = 1000;
  private inProcess: boolean = false;

  /**
   * Metodo que establece el numero actual 
   * del contador obtenido de un input #setSNumberInput
   * @param inputValue valor del input 
   */
  getNumber(inputValue: string) {
    let number = parseFloat(inputValue);
    if (!isNaN(number)) this.setNumber(number);
  }

  /**
   * Metodo que establece el numero actual del contador
   * @param newNumber nuevo numero
   */
  setNumber(newNumber: number) {
    this.actualNumber = newNumber;
  }

  /**
   * Metodo que establece cuantos numeros 
   * avanza en cada iteracion obtenido 
   * de un input #setStepInput
   * @param inputValue valor del input 
   */
  getStep(inputValue: string) {
    let number = parseFloat(inputValue);
    if (!isNaN(number)) this.setStep(number);
  }

  /**
   * Metodo que establece cuantos numeros avanza en cada iteracion
   * @param newStep numero a avanzar
   */
  setStep(newStep: number) {
    this.step = newStep;
  }

  /**
   * Metodo que establece el tiempo 
   * entre iteraciones obtenido de 
   * un input #setTimeGapInput
   * @param inputValue valor del input 
   */
  getTimeGap(inputValue: string) {
    let number = parseFloat(inputValue);
    if (!isNaN(number)) this.setTimeGap(number);
  }

  /**
   * Metodo que establece el tiempo entre iteraciones
   * @param newTimeGap tiempo en segundos
   */
  setTimeGap(newTimeGap: number) {
    this.timeGap = newTimeGap * 1000;
  }

  /**
   * Metodo que hace el calculo para 
   * saber el siguiente numero del contador
   */
  private CalcInfo() {
    if (this.ascendentCount) this.setNumber(this.actualNumber + this.step);
    else this.setNumber(this.actualNumber - this.step);
  }

  /**
   * Metodo que inicia el contador
   */
  startCount() {
    this.counting = true;
    if (!this.inProcess) {
      this.CalcInfo();
      this.inProcess = true;
      setTimeout(() => {
        this.inProcess = false;
        if (this.counting) this.startCount();
      }, this.timeGap);
    }
  }

  /**
   * Metodo que para el contador
   */
  pauseCount() {
    this.counting = false;
  }

  /**
   * Metodo que establece los valores 
   * predeterminados al contador
   */
  resetCount() {
    this.pauseCount();
    this.countUp();
    this.setNumber(0);
    this.setStep(1);
    this.setTimeGap(1);
  }

  /**
   * Metodo que hace que el contador avance 
   * en el sentido positivo de los numeros
   */
  countUp() {
    this.ascendentCount = true;
  }

  /**
   * Metodo que hace que el contador avance 
   * en el sentido negativo de los numeros
   */
  countDown() {
    this.ascendentCount = false;
  }

}
