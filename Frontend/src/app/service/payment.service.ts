import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  processPayment(totalAmount: number): Promise<any> {
    const paymentUrl = '';

    return this.http.post(paymentUrl, { amount: totalAmount }).toPromise();
  }
  
}
