/**
 * Clase calculadora que maneja la información y
 * operaciones de la misma
 */
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    /**
     * Metodo que actualiza la operacion en la pantalla
     */
    Calculadora.refrescarPantalla = function () {
        DOM.pantalla.innerHTML = this.contenidoPantalla;
    };
    /**
     * Metodo que restablece las operaciones a 0
     */
    Calculadora.eliminarContenido = function () {
        this.contenidoPantalla = "0";
        this.contenidoOperacion = "0";
        this.refrescarPantalla();
    };
    /**
     * Metodo que aniade informacion sobre la operacion a
     * realizar tanto al usuario como a la logica del programa
     * @param nuevoContenido nueva informacion a aniadir
     */
    Calculadora.aniadirContenido = function (nuevoContenido) {
        var nuevoContenidoOperacion;
        switch (nuevoContenido) {
            case "x":
                nuevoContenidoOperacion = "*";
                break;
            case "exp":
                nuevoContenidoOperacion = "**";
                break;
            default:
                nuevoContenidoOperacion = nuevoContenido;
                break;
        }
        if (this.contenidoPantalla == "0" || this.contenidoPantalla == "Syntax error") {
            this.contenidoPantalla = nuevoContenido;
            this.contenidoOperacion = nuevoContenidoOperacion;
        }
        else {
            this.contenidoPantalla += nuevoContenido;
            this.contenidoOperacion += nuevoContenidoOperacion;
        }
        this.refrescarPantalla();
    };
    /**
     * Metodo que realiza las operaciones obtenidas
     */
    Calculadora.realizarOperacion = function () {
        if (this.validarOperacion()) {
            this.contenidoOperacion = eval(this.contenidoOperacion);
            this.contenidoPantalla = this.contenidoOperacion;
        }
        else {
            this.contenidoPantalla = "Syntax error";
        }
        this.refrescarPantalla();
    };
    /**
     * Función que comprueba si se pueden ejecutar las operaciones sin errores
     * @returns true si las operaciones son validas o false si no lo son
     */
    Calculadora.validarOperacion = function () {
        var validacion = true;
        try {
            eval(this.contenidoOperacion);
        }
        catch (e) {
            validacion = false;
        }
        finally {
            return validacion;
        }
    };
    //Variables
    Calculadora.contenidoPantalla = "0";
    Calculadora.contenidoOperacion = "0";
    return Calculadora;
}());
