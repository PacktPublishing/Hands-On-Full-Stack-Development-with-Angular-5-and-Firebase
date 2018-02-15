import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChatComponent} from './chat.component';

export const ROUTES: Routes = [
    {path: 'app-friends-chat/:id', component: ChatComponent}
];

/**
 * Chat Routing Module
 */
@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class ChatRoutingModule {
}
