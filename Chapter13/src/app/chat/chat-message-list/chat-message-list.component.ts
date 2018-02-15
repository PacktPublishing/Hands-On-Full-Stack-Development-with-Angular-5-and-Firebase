import {AfterViewChecked, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MessagingService} from '../../services/messaging.service';
import {Message} from '../../services/message';
import {UserService} from '../../services/user.service';
import {User} from '../../services/user';

@Component({
    selector: 'app-chat-message-list',
    styleUrls: ['chat-message-list.component.scss'],
    templateUrl: 'chat-message-list.component.html'
})
export class ChatMessageListComponent implements OnInit, AfterViewChecked {
    @Input() friendUid: string;
    messages: Message[];
    key: string;
    private user: User;
    @ViewChild('scrollContainer') private scrollContainer: ElementRef;

    constructor(private messageService: MessagingService,
                private userService: UserService,
                private cdRef: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.user = this.userService.getSavedUser().getValue();
        this.messageService.isMessagePresent(this.user.uid, this.friendUid).subscribe(snapshot => {
            if (snapshot == null) {
                console.log('Message is empty');
                this.key = this.messageService.freshlyCreateChatIDEntry(this.user.uid, this.friendUid);
            } else {
                this.key = snapshot.key;
            }
            this.messageService.setKey(this.key);
            this.subscribeMessages();
        });
    }

    ngAfterViewChecked() {
        this.scrollToBottom();
        this.cdRef.detectChanges();
    }

    scrollToBottom(): void {
        try {
            this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
        } catch (err) {
            console.log('Error');
        }
    }

    subscribeMessages() {
        this.messageService.getMessages(this.key)
            .subscribe(
                messages => {
                    this.messages = messages;
                });

    }

}
