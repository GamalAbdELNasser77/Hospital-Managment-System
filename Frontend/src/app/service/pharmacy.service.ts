import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITreatment } from './ITreatment';
import { catchError, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PharmacyService {
  _url = 'https://asd-6gr1.onrender.com/treatments';
  constructor(private http: HttpClient) {}
  searchTreatment(nameTreatment: string = '',  price: string = ''): Observable<ITreatment[]> {
   let nametreat = nameTreatment.toUpperCase();
    let params = new HttpParams();
    params = params.append('name', nametreat);
    params = params.append('price', price);

    return this.http
      .get<ITreatment[]>('http://localhost:3000/treatments/search', {params})
      .pipe(catchError(this.handleError));
  }
  getTreatments(): Observable<ITreatment[]> {
    return this.http
      .get<ITreatment[]>(this._url)
      .pipe(catchError(this.handleError));
  }
  getTreatmentById(treatmentId: number): Observable<ITreatment> {
    const url = `${(this._url = 'https://asd-6gr1.onrender.com/treatments')}/${treatmentId}`;
    return this.http.get<ITreatment>(url).pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
