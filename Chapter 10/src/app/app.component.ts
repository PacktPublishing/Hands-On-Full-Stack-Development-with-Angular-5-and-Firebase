import {Component} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';

@Component({
    selector: 'app-friends',
    styleUrls: ['app.component.scss'],
    templateUrl: './app.component.html',
})
export class AppComponent {

    authenticationService: AuthenticationService;

    constructor(private authService: AuthenticationService) {
        this.authenticationService = authService;
    }
}
