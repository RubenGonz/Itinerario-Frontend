import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CountryInterface } from '../../interfaces/country';
import { UniversityInterface } from '../../interfaces/university';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss']
})
export class BrowserComponent implements OnInit {

  //Variables
  COUNTRIES: CountryInterface[] = [
    { id: "Spain", name: "España" },
    { id: "United Kingdom", name: "Reino Unido" },
    { id: "Germany", name: "Alemania" },
    { id: "Portugal", name: "Portugal" },
    { id: "Turkey", name: "Turkia" }
  ]; 
  selectedCountry: string = "";
  typeText: string = ""; 
  
  /**
   * Constructor que inicializalos servicios necesarios
   * @param searchService servicio que busca universidades
   */
  constructor(private searchService: SearchService) { }

  /**
   * Metodo que al inicializar el componente selecciona 
   * el primer pais y realiza una busqueda
   */
  ngOnInit(): void {
    this.selectedCountry = this.COUNTRIES[0].id;
    this.getUniversities();
  }

  /**
   * Metodo usado para cambiar el pais de busqueda
   */
  changeCountry(country: string) {
    this.selectedCountry = country;
    this.getUniversities();
  }

  /**
   * Metodo que realiza la busqueda
   */
  getUniversities() {
    this.searchService.getUniversities(this.selectedCountry, this.typeText);
  }

}
