import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';

export const ROUTES: Routes = [
    {path: 'app-friends-signup', component: SignupComponent},
    {path: 'app-friends-login', component: LoginComponent}
];

/**
 * Authentication Routing Module
 */
@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthenticationRouting {
}
