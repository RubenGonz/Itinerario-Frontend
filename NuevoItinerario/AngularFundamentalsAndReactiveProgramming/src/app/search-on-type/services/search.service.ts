import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { University, UniversityInterface } from '../interfaces/university';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  //Variables
  private apiUrl: string = "http://universities.hipolabs.com";
  private universities$ = new BehaviorSubject<UniversityInterface[]>([]);

  /**
   * Observable que tiene las universidades de la ultima busqueda
   */
  get universities(): Observable<UniversityInterface[]> { return this.universities$.asObservable(); }

  /**
   * Constructor que inicializa los servicios
   * @param http servicio encargado de hacer las peticiones http
   */
  constructor(private http: HttpClient) { }

  /**
   * Metodo que realiza las busquedas a la api
   * @param country pais de busqueda
   * @param name nombre de la universidad
   */
  getUniversities(country: string, name: string) {
    const params = new HttpParams().set("country", country);
    let universities: UniversityInterface[] = [];

    this.http.get(this.apiUrl + "/search", { params })
      .subscribe(universitiesApi => {
        Object.values(universitiesApi).forEach(universityApi => {
          if (universityApi.name.toLowerCase().includes(name.toLowerCase())) {
            universities.push(new University(universityApi.name, universityApi.web_pages[0]));
          }
        })
        this.universities$.next(universities);
      })
  }
}
