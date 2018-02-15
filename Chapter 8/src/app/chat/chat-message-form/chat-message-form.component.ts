import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-chat-message-form',
    styleUrls: ['chat-message-form.component.scss'],
    templateUrl: 'chat-message-form.component.html'
})
export class ChatMessageFormComponent implements OnInit {
    @Input() friendUid: string;

    uid: string;

    newMessage: string;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.uid = this.userService.getSavedUser().getValue().uid;
    }

    sendMessage() {
    }

}
