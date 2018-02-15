import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from './authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(private authService: AuthenticationService,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const isLoggedIn: boolean = this.authService.isAuthenticated();
        if (!isLoggedIn) {
            this.router.navigateByUrl('/app-friends-login');
        }
        return isLoggedIn;
    }
}
