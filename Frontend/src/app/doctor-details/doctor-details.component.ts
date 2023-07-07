import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDoctor } from '../service/IDoctor';
import { DoctorService } from '../service/doctor.service';
@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss'],
})
export class DoctorDetailsComponent {
  data: any;
  id: String = '';
  doctorDetails!: IDoctor;
  isLoad: boolean = true;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _doctorSirvice: DoctorService
  ) {
    this.id = this._ActivatedRoute.snapshot.params['id'];
  }
  onDoctorChange(event: any) {
    this.getDoctor(event);
  }

  ngOnInit(): void {
    if (this.id) {
      this.getDoctor(this.id);
    }
  }
  getDoctor(id: any) {
    this._doctorSirvice.getDoctorById(id).subscribe((res: any) => {
      this.doctorDetails = res[0];
      this.isLoad = false;
    });
  }
}
