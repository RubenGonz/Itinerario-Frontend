import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationServiceService {

  private parentMessage = new Subject<string>();
  private childMessage = new Subject<string>();

  changeParentMessage(newMessage: string) {
    this.parentMessage.next(newMessage);
  }

  changeChildMessage(newMessage: string) {
    this.childMessage.next(newMessage);
  }

  getParentMessage(): Observable<string> {
    return this.parentMessage.asObservable();
  }

  getChildMessage(): Observable<string> {
    return this.childMessage.asObservable();
  }
}
