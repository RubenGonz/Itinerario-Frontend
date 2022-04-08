/**
 * Variable que guarda elementos del documento
 */
const DOM = {
    calculadora: document.getElementById('calculadora'),
    pantalla: document.getElementById('pantalla'),
}

/**
 * Listener que detecta donde pulsas para mandarle 
 * informacion a la calculadora y mostrar un efecto de boton
 */
DOM.calculadora.addEventListener("mousedown", (e) => {
    const element = e.target as HTMLElement;
    if (element.classList.contains("boton")) {
        element.classList.add("botonPresionado");
        let valorBoton = element.innerHTML;
        switch (valorBoton) {
            case "=":
                Calculadora.realizarOperacion();
                break;
            case "C":
                Calculadora.eliminarContenido();
                break;
            default:
                Calculadora.aniadirContenido(valorBoton);
                break;
        }
    }
})

/**
 * Listener que detecta donde sueltas el 
 * raton para mostrar un efecto de boton
 */
DOM.calculadora.addEventListener("mouseup", (e) => {
    Object["values"](document.getElementsByClassName("botonPresionado")).forEach(boton => {
        boton.classList.remove("botonPresionado");
    });
})