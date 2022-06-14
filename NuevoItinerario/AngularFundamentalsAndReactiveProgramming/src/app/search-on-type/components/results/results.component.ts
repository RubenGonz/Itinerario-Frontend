import { Component, Input, OnInit } from '@angular/core';
import { UniversityInterface } from '../../interfaces/university';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit{

  //Variables
  universities: UniversityInterface[] = [];

  /**
   * Constructor que inicializalos servicios necesarios
   * @param searchService servicio que busca universidades
   */
  constructor(private searchService: SearchService) { }

  /**
   * Metodo que al inicializar el componente 
   * espera a la respuesta de las busquedas
   */
  ngOnInit() {
    this.searchService.universities.subscribe(universities => {
      this.universities = universities;
    })
  }
  
}
