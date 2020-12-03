import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { List } from './list'; 


@Injectable({
  providedIn: 'root'
})
export class ListService {
  private listUrl = 'assets/lists.json';
  constructor(private http: HttpClient) { }

  getLists(): Observable<List[]> {
    return this.http.get<List[]>(this.listUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getList(name: string): Observable<List | undefined> {
    return this.getLists()
    .pipe(
      map((lists: List[]) => lists.find(l => l.name.toLowerCase() === name.toLowerCase()))
    )
  }

  private handleError(err: HttpErrorResponse): Observable<never>{
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
