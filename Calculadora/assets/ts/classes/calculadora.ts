/**
 * Clase calculadora que maneja la información y 
 * operaciones de la misma
 */
class Calculadora {

    //Variables
    static contenidoPantalla: string = "0";
    static contenidoOperacion: string = "0";

    /**
     * Metodo que actualiza la operacion en la pantalla
     */
    static refrescarPantalla(): void {
        DOM.pantalla.innerHTML = this.contenidoPantalla;
    }

    /**
     * Metodo que restablece las operaciones a 0
     */
    static eliminarContenido(): void {
        this.contenidoPantalla = "0";
        this.contenidoOperacion = "0";
        this.refrescarPantalla();
    }

    /**
     * Metodo que aniade informacion sobre la operacion a 
     * realizar tanto al usuario como a la logica del programa
     * @param nuevoContenido nueva informacion a aniadir
     */
    static aniadirContenido(nuevoContenido: string): void {
        let nuevoContenidoOperacion: string;
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
        } else {
            this.contenidoPantalla += nuevoContenido;
            this.contenidoOperacion += nuevoContenidoOperacion;
        }
        this.refrescarPantalla();
    }

    /**
     * Metodo que realiza las operaciones obtenidas
     */
    static realizarOperacion() {
        if (this.validarOperacion()) {
            this.contenidoOperacion = eval(this.contenidoOperacion);
            this.contenidoPantalla = this.contenidoOperacion;
        } else {
            this.contenidoPantalla = "Syntax error";
        }
        this.refrescarPantalla();
    }

    /**
     * Función que comprueba si se pueden ejecutar las operaciones sin errores
     * @returns true si las operaciones son validas o false si no lo son
     */
    static validarOperacion(): boolean {
        let validacion = true;
        try {
            eval(this.contenidoOperacion);
        } catch (e) {
            validacion = false;
        } finally {
            return validacion;
        }
    }

}