import { Injectable } from '@angular/core';
import { IDoctor } from './../service/IDoctor';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  _url = 'https://asd-6gr1.onrender.com/doctors';
  constructor(private http: HttpClient) {}
  returnData(): Observable<any> {
    return this.http.get(`https://asd-6gr1.onrender.com/doctors`);
  }
  searchDoctors(paylodParams: any): Observable<IDoctor[]> {
    let params = new HttpParams();
    paylodParams.name
      ? (params = params.append('name', paylodParams.name))
      : '';
    paylodParams.title
      ? (params = params.append('title', paylodParams.title))
      : '';
    paylodParams.price
      ? (params = params.append('price', paylodParams.price))
      : '';

    return this.http
      .get<IDoctor[]>('http://localhost:3000/doctors/search', { params })
      .pipe(catchError(this.handleError));
  }
  getDoctors(): Observable<IDoctor[]> {
    return this.http
      .get<IDoctor[]>(this._url)
      .pipe(catchError(this.handleError));
  }

  // function for delete doctors
  deleteDoctor(doctorId: string): Observable<any> {
    const url = `https://asd-6gr1.onrender.com/doctors/${doctorId}`;
    return this.http.delete<any>(url);
  }
  getDoctorById(doctorId: String): Observable<IDoctor> {
    const url = `https://asd-6gr1.onrender.com/doctors/${doctorId}`;
    return this.http.get<any>(url).pipe(catchError(this.handleError));
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
