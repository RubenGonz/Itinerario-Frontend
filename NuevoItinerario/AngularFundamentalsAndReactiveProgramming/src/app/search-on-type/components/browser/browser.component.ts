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

  @Output() onSearch: EventEmitter<UniversityInterface[]> = new EventEmitter();

  COUNTRIES: CountryInterface[] = [
    { id: "Spain", name: "España" },
    { id: "United Kingdom", name: "Reino Unido" },
    { id: "Germany", name: "Alemania" },
    { id: "Portugal", name: "Portugal" },
    { id: "Turkey", name: "Turkia" }
  ]; 

  selectedCountry: string = "";
  typeText: string = ""; 
  
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.selectedCountry = this.COUNTRIES[0].id;
    this.getUniversities();
  }

  changeCountry(country: string) {
    this.selectedCountry = country;
    this.getUniversities();
  }

  getUniversities() {
    this.searchService.getUniversities(this.selectedCountry, this.typeText)
      .subscribe(universities => this.onSearch.emit(universities));
  }

}
