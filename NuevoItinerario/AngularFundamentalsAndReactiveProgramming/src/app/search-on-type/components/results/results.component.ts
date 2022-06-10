import { Component, Input } from '@angular/core';
import { UniversityInterface } from '../../interfaces/university';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  @Input() universities: UniversityInterface[] = [];
  
}
