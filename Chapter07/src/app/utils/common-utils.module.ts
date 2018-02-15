import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FriendsDatePipe} from './friendsdate.pipe';

/**
 * All the common utilities are included.
 */
@NgModule({
    imports: [BrowserModule],
    declarations: [FriendsDatePipe],
    exports: [FriendsDatePipe]
})
export class CommonUtilsModule {
}
