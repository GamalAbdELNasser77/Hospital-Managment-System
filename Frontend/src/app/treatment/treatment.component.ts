// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { Router } from '@angular/router';
// import { ITreatment } from '../service/ITreatment';
// import { PharmacyService } from '../service/pharmacy.service';

// @Component({
//   selector: 'app-treatment',
//   templateUrl: './treatment.component.html',
//   styleUrls: ['./treatment.component.scss'],
// })
// export class TreatmentComponent {
//   @Input() treatment: any = {};
//   @Output() item = new EventEmitter();
//   treatments: ITreatment[] = [];
//   errorMessage: any;

//   constructor(
//     private pharmacyService: PharmacyService,
//     private router: Router
//   ) {}
//   ngOnInit(): void {}

//   searchTreatment(name: string, price: string) {
//     this.pharmacyService.searchTreatment(name, price).subscribe({
//       next: (treatments) => {
//         this.treatments = treatments;
//         console.log(this.treatments);
//       },
//       error: (error) => (this.errorMessage = error),
//     });
//   }

//   add() {
//     this.item.emit(this.treatment);
//   }
  
  
// }

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ITreatment } from '../service/ITreatment';
import { PharmacyService } from '../service/pharmacy.service';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.scss'],
})
export class TreatmentComponent {
  @Input() treatment: any = {};
  @Output() item = new EventEmitter();
  addButton:boolean = false;
  amount:number=0;
  treatments: ITreatment[] = [];
  errorMessage: any;

  constructor(
    private pharmacyService: PharmacyService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  searchTreatment(name: string, price: string) {
    this.pharmacyService.searchTreatment(name, price).subscribe({
      next: (treatments) => {
        this.treatments = treatments;
        console.log(this.treatments);
      },
      error: (error) => (this.errorMessage = error),
    });
  }

  add()
    {

      this.item.emit({item:this.treatment ,quantity:this.amount })
    }

}

