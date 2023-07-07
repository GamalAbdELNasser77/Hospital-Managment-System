import { Component } from '@angular/core';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-doctors-admin',
  templateUrl: './doctors-admin.component.html',
  styleUrls: ['./doctors-admin.component.scss']
})
export class DoctorsAdminComponent {
  listDoctors: any = [];
  constructor(private doctorService: DoctorService) {}

  getListDoctors() {
    this.doctorService.getDoctors().subscribe((res) => {
      this.listDoctors = res;
      console.log(this.listDoctors)
    });
  }

  ngOnInit(): void {
    this.getListDoctors()
  }

  Delete(id: string) {
    this.doctorService.deleteDoctor(id).subscribe(data => {
      console.log('data ---------> ', data)
    })
    console.log('id -----------> ', id)
  }
}
