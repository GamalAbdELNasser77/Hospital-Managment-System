import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundError } from 'rxjs';
import { NavComponent } from './nav/nav.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorCarouselComponent } from './doctor-carousel/doctor-carousel.component';
import { CartComponent } from './cart/cart.component';
import { GatewayComponent } from './gateway/gateway.component';
import { DoctorsAdminComponent } from './admin/doctors-admin/doctors-admin.component';
import { PharmacyAdminComponent } from './admin/pharmacy-admin/pharmacy-admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'nav', component: NavComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'Pharmacy', component: PharmacyComponent },
  {path:'cart',component:CartComponent},
  { path: 'DoctorDetails/:id', component: DoctorDetailsComponent },
  { path: 'DoctorCarousel', component: DoctorCarouselComponent },
  { path: 'gateway', component: GatewayComponent },
  { path: 'admin/doctors', component: DoctorsAdminComponent },
  { path: 'admin/pharmacy', component: PharmacyAdminComponent },
  { path: 'admin', component: DoctorsAdminComponent },
  { path: 'gateway', component: GatewayComponent },
  { path: '**', component: NotFoundError },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
