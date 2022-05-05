/**
 * Objeto que guarda variables del documento html
 */
const DOM = {
    number: document.getElementById("number") as HTMLElement,
    buttonsContainer: document.getElementsByClassName("buttons-container"),
    inputContainer: document.getElementsByClassName("input-container"),
    step: document.getElementById("step") as HTMLInputElement,
    timeGap: document.getElementById("time-gap") as HTMLInputElement
}

/**
 * Listeners
*/

/**
 * Listener que actua al clickar en los botones
 */
Array.from(DOM.buttonsContainer).forEach(container => {
    (container as HTMLElement).addEventListener("click", (e) => {
        const button = e.target as HTMLButtonElement;
        switch (button.id) {
            case "start": Counter.startCount(); break;
            case "pause": Counter.pauseCount(); break;
            case "reset": Counter.resetCount(); break;
            case "count-up": Counter.countUp(); break;
            case "count-down": Counter.countDown(); break;
        }
    })
});

/**
 * Listener que actua al cambiar el contenido de los inputs
 */
Array.from(DOM.inputContainer).forEach(container => {
    (container as HTMLElement).addEventListener("change", (e) => {
        const input = e.target as HTMLInputElement;
        switch (input.id) {
            case "set-to": Counter.setNumber(parseInt(input.value)); break;
            case "step": Counter.setStep(parseInt(input.value)); break;
            case "time-gap": Counter.setTimeGap(parseFloat(input.value)); break;
        }
    })
});
