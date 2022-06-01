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

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.selectedCountry = this.COUNTRIES[0].id;
    this.getUniversities();
  }

  getUniversities() {
    this.searchService.getUniversities(this.selectedCountry, this.typeText)
      .subscribe(universitiesApi => this.universities = universitiesApi);
  }

  changeCountry(country: string) {
    this.selectedCountry = country;
    this.getUniversities();
  }

}
