/**
 * Clase que tiene la logica del contador
 */
class Counter {
    /**
     * Metodo que establece cuantos numeros avanza en cada iteracion
     * @param newStep numero a avanzar
     */
    static setStep(newStep) {
        this.step = newStep;
        DOM.step.value = newStep.toString();
    }
    /**
     * Metodo que establece el numero actual del contador
     * @param newNumber nuevo numero
     */
    static setNumber(newNumber) {
        this.actualNumber = newNumber;
        DOM.number.innerHTML = newNumber.toString();
    }
    /**
     * Metodo que establece el tiempo entre iteraciones
     * @param newTimeGap tiempo en segundos
     */
    static setTimeGap(newTimeGap) {
        this.timeGap = newTimeGap * 1000;
        DOM.timeGap.value = newTimeGap.toString();
    }
    /**
     * Metodo que hace el calculo para
     * saber el siguiente numero del contador
     */
    static CalcInfo() {
        if (this.ascendentCount)
            this.setNumber(this.actualNumber + this.step);
        else
            this.setNumber(this.actualNumber - this.step);
    }
    /**
     * Metodo que inicia el contador
     */
    static startCount() {
        this.counting = true;
        if (!this.inProcess) {
            this.CalcInfo();
            this.inProcess = true;
            setTimeout(() => {
                this.inProcess = false;
                if (this.counting)
                    this.startCount();
            }, this.timeGap);
        }
    }
    /**
     * Metodo que para el contador
     */
    static pauseCount() {
        this.counting = false;
    }
    /**
     * Metodo que establece los valores
     * predeterminados al contador
     */
    static resetCount() {
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
    static countUp() {
        this.ascendentCount = true;
    }
    /**
     * Metodo que hace que el contador avance
     * en el sentido negativo de los numeros
     */
    static countDown() {
        this.ascendentCount = false;
    }
}
//Variables
Counter.step = 1;
Counter.actualNumber = 0;
Counter.counting = false;
Counter.ascendentCount = true;
Counter.timeGap = 1000;
Counter.inProcess = false;
