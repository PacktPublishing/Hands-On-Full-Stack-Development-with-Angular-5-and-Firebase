import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {User} from './user';
import {FRIENDS_CHILD, USER_DETAILS_CHILD} from './database-constants';

/**
 * Friends search service
 *
 */
@Injectable()
export class FriendsSearchService {

    constructor(private db: AngularFireDatabase) {
    }

    getSearchFriends(start, end): Observable<User[]> {
        return this.db.list<User>('/users',
            ref => ref.orderByChild('name').limitToFirst(10).startAt(start).endAt(end)
        ).valueChanges();
    }

    addFriend(currentUser, friend) {
        this.db.object(`${USER_DETAILS_CHILD}/${FRIENDS_CHILD}/${currentUser.uid}/${friend.uid}`).set(friend).catch(error => {
            console.log(error);
        });
    }

}
