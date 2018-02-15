import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Message} from '../../services/message';

@Component({
    selector: 'app-chat-message',
    styleUrls: ['chat-message.component.scss'],
    templateUrl: 'chat-message.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatMessageComponent implements OnInit {

    @Input() message: Message;

    uid: string;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.uid = this.userService.getSavedUser().getValue().uid;
    }

    isReceiver(message: Message) {
        return this.uid === message.receiverUid;
    }

    isSender(message: Message) {
        return this.uid === message.senderUid;
    }

}
