import {Component} from '@angular/core';
import {User} from '../../services/user';
import {AuthenticationService} from '../../services/authentication.service';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-friends-signup',
    styleUrls: ['signup.component.scss'],
    templateUrl: 'signup.component.html'
})
export class SignupComponent {

    errorMessage: string;

    showError: boolean;

    constructor(private authService: AuthenticationService,
                private router: Router,
                private userService: UserService) {
    }

    onSignup(signupFormData): void {
        this.authService.signup(signupFormData.value.email, signupFormData.value.password).then((userInfo) => {
            // Register the new user
            const user: User = new User(signupFormData.value.email,
                signupFormData.value.name, signupFormData.value.mobile, userInfo.uid, 0, '');
            this.writeNewUser(user);
            this.navigateToUserProfile();
        }).catch((error) => {
            this.showError = true;
            this.errorMessage = error.message;
        });
    }

    private writeNewUser(user: User): void {
        this.userService.addUser(user);
    }

    private navigateToUserProfile() {
        this.router.navigateByUrl('/app-friends-userprofile');
    }

}
