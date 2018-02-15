import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AuthenticationModule} from './authentication/authentication.module';
import {AngularFireModule} from 'angularfire2';
import {environment} from './environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        BrowserAnimationsModule,
        RouterModule.forRoot([]),
        AuthenticationModule
    ],
    providers: [
        AngularFireAuth,
        AngularFireDatabase,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
