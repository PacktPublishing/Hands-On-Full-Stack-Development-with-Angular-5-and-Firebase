import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AngularFireModule} from 'angularfire2';
import {environment} from './environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {CommonModule} from '@angular/common';
import {AppRouting} from './app.routing';
import {AboutComponent} from './about/about.component';
import {PageNotFoundComponent} from './notfound/page-not-found.component';
import {UserModule} from './user/user.module';
import {AuthenticationModule} from './authentication/authentication.module';
import {ChatModule} from './chat/chat.module';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        PageNotFoundComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        BrowserAnimationsModule,
        AuthenticationModule,
        AppRouting,
        UserModule,
        ChatModule
    ],
    providers: [
        AngularFireAuth,
        AngularFireDatabase,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
