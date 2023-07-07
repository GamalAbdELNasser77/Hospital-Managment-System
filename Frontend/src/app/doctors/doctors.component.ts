import { Component } from '@angular/core';
import { DoctorService } from '../service/doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent {
  doctors: any[] = [];
page: string|number|undefined;

  constructor(private serviceDoctor: DoctorService) {
    serviceDoctor.returnData().subscribe((data) => (this.doctors = data));
  }
}
