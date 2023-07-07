import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../service/payment.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  
  constructor(private _Router:Router , private _PaymentService:PaymentService) {}

  cartProduct : any[]= [];
  total:any=0;
  totalOrdersAmount: number = 0;
  ngOnInit(): void {

    this.gitCArdProduct()
  }

  gitCArdProduct(){
    if("cart" in localStorage)
    {
      this.cartProduct=JSON.parse(localStorage.getItem("cart")!)

  }
  // console.log(this.cartProduct)
 this.getCartTotal()
}
minsAmount(index :number){
  
  if (this.cartProduct[index].quantity <= 0) {
    return;
  }
  this.cartProduct[index].quantity--
  localStorage.setItem("cart" , JSON.stringify(this.cartProduct))
  this.getCartTotal()
}

addAmount(index :number){
  this.cartProduct[index].quantity++
  localStorage.setItem("cart" , JSON.stringify(this.cartProduct))
  this.getCartTotal()
}

detectChange(){
    this.getCartTotal()
  localStorage.setItem("cart" , JSON.stringify(this.cartProduct))
}

deleteProduct(index : number){
  this.cartProduct.splice(index , 1)
    this.getCartTotal()
  localStorage.setItem("cart" , JSON.stringify(this.cartProduct))
}

clearCart(){
  this.cartProduct = []
    this.getCartTotal()
  localStorage.setItem("cart" , JSON.stringify(this.cartProduct))
}

getCartTotal()
{
  this.total=0
  for(let x in this.cartProduct){
    this.total += parseFloat(this.cartProduct[x].item.price) * parseFloat(this.cartProduct[x].quantity)

  }
}
calculateTotalPrice(price: string, quantity: string): string {
  const totalPrice = parseFloat(price) * parseInt(quantity);
  this.totalOrdersAmount = totalPrice;
  return totalPrice.toString();
}

redirectToGatway() {
  this._Router.navigate(['/gateway'], {queryParams: { totalAmounts: this.totalOrdersAmount}});

  const totalAmount :any = '' // Replace with the actual total amount

    // Call the processPayment method from the PaymentService
    this._PaymentService.processPayment(totalAmount)
      .then(response => {
        // Handle the response from the server-side, such as showing a success message
        console.log(response);
      })
      .catch(error => {
        // Handle any errors that occurred during payment processing
        console.error(error);
      });

}




}
