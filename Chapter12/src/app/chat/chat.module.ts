import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {UserService} from '../services/user.service';
import {ChatMessageComponent} from './chat-message/chat-message.component';
import {ChatMessageListComponent} from './chat-message-list/chat-message-list.component';
import {ChatMessageFormComponent} from './chat-message-form/chat-message-form.component';
import {ChatComponent} from './chat.component';
import {MessagingService} from '../services/messaging.service';
import {ChatRoutingModule} from './chat-routing.module';

/**
 * Chat Module
 */
@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ChatRoutingModule
    ],
    declarations: [
        ChatMessageComponent,
        ChatMessageListComponent,
        ChatMessageFormComponent,
        ChatComponent
    ],
    providers: [
        MessagingService,
        UserService
    ]
})
export class ChatModule {
}
