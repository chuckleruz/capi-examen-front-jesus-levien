import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Usuarios } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiURL = "http://localhost:8000/api/users/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
    }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Usuarios[]> {
    return this.httpClient.get<Usuarios[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
