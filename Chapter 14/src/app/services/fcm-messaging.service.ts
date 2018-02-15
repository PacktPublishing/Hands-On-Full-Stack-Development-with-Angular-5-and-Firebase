import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import 'firebase/messaging';

@Injectable()
export class FcmMessagingService {

    messaging = null;

    constructor(private angularFireDatabase: AngularFireDatabase, private afAuth: AngularFireAuth) {
        this.messaging = angularFireDatabase.app.messaging();
    }

    getPermission() {
        this.messaging.requestPermission()
            .then(() => {
                console.log('Permission granted.');
                this.getToken();
            })
            .catch((err) => {
                console.log('Permission denied', err);
            });
    }

    getToken() {
        this.messaging.getToken()
            .then((currentToken) => {
                if (currentToken) {
                    console.log(currentToken);
                    this.sendTokenToServer(currentToken);
                } else {
                    console.log('No token available');
                }
            })
            .catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
            });
    }

    onMessage() {
        this.messaging.onMessage((payload) => {
            console.log('Message received. ', payload);
        });
    }

    onTokenRefresh() {
        this.messaging.onTokenRefresh(function () {
            this.messaging.getToken()
                .then(function (refreshedToken) {
                    console.log('Token refreshed.');
                    this.sendTokenToServer(refreshedToken);
                })
                .catch(function (err) {
                    console.log('Unable to retrieve refreshed token ', err);
                });
        });

    }

    sendTokenToServer(token) {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                const data = {[user.uid]: token};
                this.angularFireDatabase.object('fcm-tokens/').update(data);
            }
        });
    }
}
