import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-friends-chat',
    styleUrls: ['chat.component.scss'],
    templateUrl: 'chat.component.html',
})
export class ChatComponent implements OnInit, OnDestroy {

    uid: string;

    private sub: any;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.uid = params['id'];
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
