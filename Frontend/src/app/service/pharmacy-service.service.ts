import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmacyServiceService {

  constructor(private _httpclient : HttpClient) { }
  returnTreatments() : Observable<any>{

  return  this._httpclient.get(`https://asd-6gr1.onrender.com/treatments`)

  }
}
