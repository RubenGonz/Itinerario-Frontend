import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-external-libreries',
  templateUrl: './external-libreries-page.component.html',
  styleUrls: ['./external-libreries-page.component.scss']
})
export class ExternalLibreriesPageComponent implements OnInit {

  constructor( private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => console.log(data))
  }

}
