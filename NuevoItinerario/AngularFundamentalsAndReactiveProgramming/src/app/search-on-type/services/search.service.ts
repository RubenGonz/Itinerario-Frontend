import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { University, UniversityInterface } from '../interfaces/university';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl: string = "http://universities.hipolabs.com";

  constructor(private http: HttpClient) { }

  getUniversities(country: string, name: string): Observable<UniversityInterface[]> {
    const params = new HttpParams().set("country", country);
    let universities: UniversityInterface[] = [];

    return this.http.get(this.apiUrl + "/search", { params }).pipe(
      map(universitiesApi => {
        Object.values(universitiesApi).forEach(universityApi => {
          if (universityApi.name.toLowerCase().includes(name.toLowerCase())) {
            universities.push(new University(universityApi.name, universityApi.web_pages[0]));
          }
        })
        return universities;
      })
    )
  }
}
