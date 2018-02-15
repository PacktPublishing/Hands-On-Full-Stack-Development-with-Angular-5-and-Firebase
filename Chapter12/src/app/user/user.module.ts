import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {EditDialogComponent} from '../edit-dialog/edit-dialog.component';
import {FormsModule} from '@angular/forms';
import {UserFriendsComponent} from './user-friends/user-friends.component';
import {CommonUtilsModule} from '../utils/common-utils.module';
import {FriendsService} from '../services/friends.service';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        UserRoutingModule,
        CommonUtilsModule
    ],
    declarations: [
        UserProfileComponent,
        UserFriendsComponent,
        EditDialogComponent
    ],
    providers: [
        FriendsService
    ]
})
export class UserModule {
}
