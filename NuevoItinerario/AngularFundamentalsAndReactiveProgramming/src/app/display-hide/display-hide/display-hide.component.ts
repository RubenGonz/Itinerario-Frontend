import { Component } from '@angular/core';

@Component({
  selector: 'app-display-hide',
  templateUrl: './display-hide.component.html',
  styleUrls: ['./display-hide.component.scss']
})
export class DisplayHideComponent {

  //Variables
  visibleContainer: boolean = false;
  buttonText: string = "Mostrar texto";

  /**
   * Metodo que cambia la vision del contenedor
   */
  toggleVision() {
    this.visibleContainer = !this.visibleContainer;
    this.visibleContainer ? this.buttonText = "Ocultar texto" : this.buttonText = "Mostrar texto";
  }
}
