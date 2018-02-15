import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Message} from '../../services/message';
import {MessagingService} from '../../services/messaging.service';

@Component({
    selector: 'app-chat-message-form',
    styleUrls: ['chat-message-form.component.scss'],
    templateUrl: 'chat-message-form.component.html'
})
export class ChatMessageFormComponent implements OnInit {
    @Input() friendUid: string;

    uid: string;

    newMessage: string;

    constructor(private userService: UserService,
                private messageService: MessagingService) {
    }

    ngOnInit() {
        this.uid = this.userService.getSavedUser().getValue().uid;
    }

    sendMessage() {
        const message: Message = new Message(this.newMessage, this.uid, this.friendUid, Date.now());
        this.messageService.createNewMessage(message);
    }


}
