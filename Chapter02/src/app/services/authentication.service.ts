import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

/**
 * Authentication service
 *
 */
@Injectable()
export class AuthenticationService {

    /**
     * Constructor
     *
     * @param {AngularFireAuth} angularFireAuth provides the functionality related to authentication
     */
    constructor(private angularFireAuth: AngularFireAuth) {
    }

    public signup(email: string, password: string) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
    }
}
