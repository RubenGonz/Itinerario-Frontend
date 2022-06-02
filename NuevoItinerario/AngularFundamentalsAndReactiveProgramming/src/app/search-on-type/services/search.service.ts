import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { University, UniversityInterface } from '../interfaces/university';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  /**
   * Constructor del servicio
   * @param http servicio que hara las llamadas a http
   */
  constructor(private http: HttpClient) { }

  /**
   * Funcion que llama a una api a traves de una url 
   * usando variables y devuelve una lista de 
   * universidades que coinciden
   * @param country pais de la universidad
   * @param name nombre de la universidad
   * @returns array de universidades
   */
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
