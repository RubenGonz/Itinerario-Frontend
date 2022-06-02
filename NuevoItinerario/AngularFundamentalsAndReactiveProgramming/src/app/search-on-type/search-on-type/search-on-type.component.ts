import { Component, OnInit } from '@angular/core';
import { CountryInterfce } from '../interfaces/country';
import { UniversityInterface } from '../interfaces/university';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-on-type',
  templateUrl: './search-on-type.component.html',
  styleUrls: ['./search-on-type.component.scss']
})
export class SearchOnTypeComponent implements OnInit {

  //Variables
  selectedCountry: string = "";
  typeText: string = "";
  universities: UniversityInterface[] = [];

  COUNTRIES: CountryInterfce[] = [
    { id: "Spain", name: "España" },
    { id: "United Kingdom", name: "Reino Unido" },
    { id: "Germany", name: "Alemania" },
    { id: "Portugal", name: "Portugal" },
    { id: "Turkey", name: "Turkia" }
  ];

  /**
   * Constructor del componente
   * @param searchService  servicio encargado de realizar las busquedas
   */
  constructor(private searchService: SearchService) { }

  /**
   * Al cargar se selcciona el primer pais y 
   * se realiza una busqueda
   */
  ngOnInit(): void {
    this.selectedCountry = this.COUNTRIES[0].id;
    this.getUniversities();
  }

  /**
   * Metodo que a través del servicio realiza una busqueda en la api
   */
  getUniversities() {
    this.searchService.getUniversities(this.selectedCountry, this.typeText)
      .subscribe(universitiesApi => this.universities = universitiesApi);
  }

  /**
   * Metodo que cambia la variable selectedCountry 
   * y realiza una busqueda posteriormente
   * @param country pais al que se cambia
   */
  changeCountry(country: string) {
    this.selectedCountry = country;
    this.getUniversities();
  }

}
