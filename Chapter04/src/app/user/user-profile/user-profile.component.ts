import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-friends-userprofile',
  styleUrls: ['user-profile.component.scss'],
  templateUrl: 'user-profile.component.html'
})
export class UserProfileComponent {

  constructor(private authService: AuthenticationService,
              private router: Router) {
  }

  onLogout(): void {
    this.authService.signout().then(() => {
      this.navigateToLogin();
    });
  }

  navigateToLogin() {
    this.router.navigateByUrl('/app-friends-login');
  }
}
