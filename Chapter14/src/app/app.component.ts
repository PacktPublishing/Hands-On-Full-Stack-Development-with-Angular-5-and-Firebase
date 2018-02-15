import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import {User} from './services/user';
import {FriendsSearchService} from './services/friends-search.service';
import {UserService} from './services/user.service';
import {FcmMessagingService} from './services/fcm-messaging.service';

@Component({
    selector: 'app-friends',
    styleUrls: ['app.component.scss'],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

    startAt: string;

    endAt: string;

    users: User[];

    currentLoginUser: User;

    searchText: string;

    authenticationService: AuthenticationService;

    constructor(private authService: AuthenticationService,
                private userService: UserService,
                private friendsSearchService: FriendsSearchService,
                private fcmService: FcmMessagingService) {
        this.authenticationService = authService;

    }

    ngOnInit() {
        this.userService.getSavedUser().subscribe((user) => {
            this.currentLoginUser = user;
        });
        this.searchText = '';
        this.onSearchFriends(this.searchText);
        this.fcmService.getPermission();
        this.fcmService.onMessage();
        this.fcmService.onTokenRefresh();
    }

    onSearch(event) {
        const text = event.target.value;
        this.onSearchFriends(text);
    }

    onSearchFriends(searchText) {
        const text = searchText;
        this.startAt = text;
        this.endAt = text + '\uf8ff';
        this.friendsSearchService.getSearchFriends(this.startAt, this.endAt)
            .subscribe(users => this.users = users);
    }

    onAddFriend(friend) {
        this.friendsSearchService.addFriend(this.currentLoginUser, friend);
    }

}
