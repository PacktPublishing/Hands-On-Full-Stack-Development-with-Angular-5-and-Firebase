import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {Observable} from 'rxjs/Observable';
import {User} from '../../services/user';
import {mockUserJSON} from '../../test-data/user-test-data';
import {AuthenticationService} from '../../services/authentication.service';
import {AngularFireAuth} from 'angularfire2/auth';
import {CommonModule} from '@angular/common';
import {BrowserModule, By} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {DebugElement} from '@angular/core';
import {ErrorAlertComponent} from '../../shared/error-alert/error-alert.component';

class RouterStub {
    navigateByUrl(url: string) {
        return url;
    }
}

class UserServiceStub {

    getUser(): Observable<User> {
        return Observable.of(mockUserJSON);
    }

}

class AuthenticationServiceStub {

    login(email: string, password: string) {
    }

    resetPassword(email: string) {
    }
}

class AngularFireAuthStub {
    readonly auth: AuthStub = new AuthStub();
}

class AuthStub {

    onAuthStateChanged() {
        return Observable.of({uid: '1234'});
    }
}


describe('LoginComponent with tests', () => {

    let fixture: ComponentFixture<LoginComponent>;
    let component: LoginComponent;
    let de: DebugElement;
    const mockAuthService: AuthenticationServiceStub = new AuthenticationServiceStub();

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [
                LoginComponent,
                ErrorAlertComponent
            ],
            imports: [
                CommonModule,
                BrowserModule,
                FormsModule
            ],
            providers: [
                {provide: UserService, useClass: UserServiceStub},
                {provide: Router, useClass: RouterStub},
                {provide: AuthenticationService, useValue: mockAuthService},
                {provide: AngularFireAuth, useClass: AngularFireAuthStub}
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        fixture.detectChanges();
    });

    afterEach(async(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => fixture.destroy());
    }));

    it('Should instantiate LoginComponent', async(() => {
        expect(component instanceof LoginComponent).toBe(true,
            'LoginComponent not created');
    }));

    it('Should call login', async(() => {
        const loginButton = de.query(By.css('#login-btn'));
        expect(loginButton).not.toBeNull('Login button not found');

        spyOn(mockAuthService, 'login').and.callThrough();
        de.query(By.css('#email')).nativeElement.value = 'user@gmail.com';
        de.query(By.css('#password')).nativeElement.value = 'password';
        fixture.detectChanges();

        // Login button is enabled
        expect(loginButton.nativeElement.disabled).toBe(false);
        loginButton.nativeElement.click();
        fixture.detectChanges();
        expect(mockAuthService.login).toHaveBeenCalled();
    }));

});
