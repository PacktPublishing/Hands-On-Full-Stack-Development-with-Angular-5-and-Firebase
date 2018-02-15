import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {EditDialogComponent} from '../edit-dialog/edit-dialog.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UserRoutingModule
    ],
    declarations: [
        UserProfileComponent,
        EditDialogComponent
    ]
})
export class UserModule {
}
