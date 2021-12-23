import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Manga } from '../entity/manga';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  private mangaUrl = 'http://127.0.0.1:9090/mangas/byAccount/1';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*' })
  };


  constructor(private http: HttpClient) { }

  getMangas(): Observable<Manga[]> {
    return this.http.get<Manga[]>(this.mangaUrl, this.httpOptions)
      .pipe(
        tap(_ => console.log('fetched mangas')),
        catchError(this.handleError<Manga[]>('getMangas', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
       console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  

}
