import { Component, HostListener} from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  responsive() {}
  isLogin:boolean=false;
  
  isNavbarFixed = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isNavbarFixed = window.pageYOffset > 0;
  }

  constructor(private _AuthService:AuthService){}
  ngOnInit(): void {
    this._AuthService.userData.subscribe(()=>{
      if (this._AuthService.userData.getValue() !=null){
        this.isLogin=true
    }
  else{
    this.isLogin=false
  }
  })
    }
  

    
}
