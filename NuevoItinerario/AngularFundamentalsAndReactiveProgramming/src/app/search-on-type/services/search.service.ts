import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { University, UniversityInterface } from '../interfaces/university';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getUniversities(country: string, name: string): Observable<UniversityInterface[]> {
    let universitiesMatched: UniversityInterface[] = [];
    return this.http.get("http://universities.hipolabs.com/search?country=" + country).pipe(
      map(universitiesApi => {
        Object.values(universitiesApi).forEach(universityApi => {
          if (universityApi.name.toLowerCase().includes(name.toLowerCase())) {
            universitiesMatched.push(new University(universityApi.name, universityApi.web_pages[0]));
          }
        })
        return universitiesMatched;
      })
    )
  }
}
