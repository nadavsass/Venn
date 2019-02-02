import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VennApiService {
  
  page: number = 1;
  query: string;

  constructor(private httpClient: HttpClient) { }

  search(query: string, page: number) {
    this.page = page;
    this.query = query;

    let queryParameter = new HttpParams().set('query', query).set('page', page.toString());

    return this.httpClient.get('http://localhost:3000/search', {params: queryParameter});
  }

  saveResults(query,results) {
    localStorage.setItem(query, JSON.stringify(results));
  }
}
