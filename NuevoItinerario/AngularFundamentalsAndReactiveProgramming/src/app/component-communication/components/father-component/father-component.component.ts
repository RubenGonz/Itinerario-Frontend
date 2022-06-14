import { Component, OnInit } from '@angular/core';
import { CommunicationServiceService } from '../../services/communication-service.service';

@Component({
  selector: 'app-father-component',
  templateUrl: './father-component.component.html',
  styleUrls: ['./father-component.component.scss']
})
export class FatherComponentComponent implements OnInit {

  messajeText: string = "";
  parentInputMessage: string = "";

  /**
   * Constructor del componente donde se inicializa el servicio de comunicaciones
   * @param communicationServiceService servicio de comunicaciones
   */
  constructor(private communicationServiceService: CommunicationServiceService) { }

  /**
   * Al inicializar el componente se subscribe 
   * al servicio a la espera del mensaje del hijo
   */
  ngOnInit(): void {
    this.communicationServiceService.getChildMessage().subscribe(childMessage => {
      this.changeMessage(childMessage);
    })
  }

  /**
   * Metodo que cambia la variable 
   * messajeText por un nuevo mensaje
   * @param newMessage nuevo mensaje
   */
  changeMessage(newMessage: string) {
    this.messajeText = newMessage;
  }

  /**
   * Metodo que envia al servicio un 
   * nuevo mensaje por parte del padre
   */
  emitServiceMessage() {
    this.communicationServiceService.changeParentMessage("Parent using Service");
  }

  /**
   * Metodo que cambia el contenido de la variable parentInputMessage 
   * para que se active el decorador Input
   */
  emitInputMessage() {
    if (this.parentInputMessage == "Parent using Input ") this.parentInputMessage = "Parent using Input"
    else this.parentInputMessage = "Parent using Input "
  }

  emitObservableMessage() {

  }

}
