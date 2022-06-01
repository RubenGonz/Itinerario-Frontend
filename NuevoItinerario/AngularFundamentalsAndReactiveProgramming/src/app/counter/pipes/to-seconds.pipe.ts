import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toSeconds'
})
export class ToSecondsPipe implements PipeTransform {

  /**
   * Pipe que transforma una cantidad de milisegundos a segundos
   * @param miliseconds cantidad de milisegundos
   * @returns cantidad de segundos tras la conversion
   */
  transform(miliseconds: number): number {
    return miliseconds / 1000;
  }

}
