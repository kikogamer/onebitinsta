import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.page.html',
  styleUrls: ['./sign-out.page.scss'],
})
export class SignOutPage {

  constructor(private auth: AuthService, private router: Router) { }

  confirmLogout(){
    this.auth.logout();
  }
 
  denyLogout(){
    this.router.navigateByUrl('');
  }

}
