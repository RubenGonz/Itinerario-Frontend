import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommunicationServiceService } from '../../services/communication-service.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {

  @Output() onOutput: EventEmitter<string> = new EventEmitter();
  @Input() set setInputMessage(message: string) { this.changeMessage(message) }

  //Variables locales
  messajeText: string = "";

  /**
   * Constructor del componente donde se inicializa el servicio de comunicaciones
   * @param communicationServiceService servicio de comunicaciones
   */
  constructor(private communicationServiceService: CommunicationServiceService) { }

  /**
   * Al inicializar el componente se subscribe 
   * al servicio a la espera del mensaje del padre
   */
  ngOnInit(): void {
    this.communicationServiceService.getParentMessage().subscribe(parentMessage => {
      this.changeMessage(parentMessage);
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
   * nuevo mensaje por parte del hijo
   */
  emitServiceMessage() {
    this.communicationServiceService.changeChildMessage("Child using Service");
  }

  /**
   * Metodo que emite el mensaje a través del Output
   */
  emitOutputMessage() {
    this.onOutput.emit("Child using Output");
  }

  emitObservableMessage() {

  }

}
