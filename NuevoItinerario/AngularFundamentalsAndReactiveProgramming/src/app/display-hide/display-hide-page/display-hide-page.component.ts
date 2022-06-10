import { Component } from '@angular/core';

@Component({
  selector: 'app-display-hide',
  templateUrl: './display-hide-page.component.html',
  styleUrls: ['./display-hide-page.component.scss']
})
export class DisplayHidePageComponent {

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
