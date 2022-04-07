var DOM = {
    calculadora: document.getElementById('calculadora'),
    pantalla: document.getElementById('pantalla')
};
DOM.calculadora.addEventListener("mousedown", function (e) {
    var element = e.target;
    if (element.classList.contains("boton")) {
        element.classList.add("botonPresionado");
        var valorBoton = element.innerHTML;
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
});
DOM.calculadora.addEventListener("mouseup", function (e) {
    Object["values"](document.getElementsByClassName("botonPresionado")).forEach(function (boton) {
        boton.classList.remove("botonPresionado");
    });
});
