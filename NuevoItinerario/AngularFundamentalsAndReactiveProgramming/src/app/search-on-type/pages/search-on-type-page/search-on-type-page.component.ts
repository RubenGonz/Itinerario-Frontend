import { Component } from '@angular/core';
import { CountryInterface } from '../../interfaces/country';
import { UniversityInterface } from '../../interfaces/university';

@Component({
  selector: 'app-search-on-type',
  templateUrl: './search-on-type-page.component.html',
  styleUrls: ['./search-on-type-page.component.scss']
})
export class SearchOnTypePageComponent {

  universities: UniversityInterface[] = [];

  setUniversities(universities: UniversityInterface[]) {
    this.universities = universities;
  }
}
