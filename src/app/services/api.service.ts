import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  };
  
  getApiData(){
   return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  }
}
