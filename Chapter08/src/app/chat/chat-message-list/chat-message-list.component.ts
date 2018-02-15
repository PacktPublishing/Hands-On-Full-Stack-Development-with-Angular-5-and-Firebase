import {AfterViewChecked, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../services/user';

@Component({
    selector: 'app-chat-message-list',
    styleUrls: ['chat-message-list.component.scss'],
    templateUrl: 'chat-message-list.component.html'
})
export class ChatMessageListComponent implements OnInit, AfterViewChecked {
    @Input() friendUid: string;
    key: string;
    private user: User;
    @ViewChild('scrollContainer') private scrollContainer: ElementRef;

    constructor(private userService: UserService,
                private cdRef: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.user = this.userService.getSavedUser().getValue();
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
}
