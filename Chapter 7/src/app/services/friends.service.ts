import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Friend} from './friend';
import {FRIENDS_CHILD, USER_DETAILS_CHILD} from './database-constants';

/**
 * Friends service
 *
 */
@Injectable()
export class FriendsService {

    /**
     * Constructor
     *
     * @param {AngularFireDatabase} fireDb provides the functionality related to authentication
     */
    constructor(private fireDb: AngularFireDatabase) {
    }

    getFirstPage(uid: string, pageSize: number): Observable<Friend[]> {
        return this.fireDb.list<Friend>(`${USER_DETAILS_CHILD}/${FRIENDS_CHILD}/${uid}`,
            ref => ref.limitToFirst(pageSize)
        ).valueChanges();
    }

    loadNextPage(uid: string, friendKey: string, pageSize: number): Observable<Friend[]> {
        return this.fireDb.list<Friend>(`${USER_DETAILS_CHILD}/${FRIENDS_CHILD}/${uid}`,
            ref => ref.orderByKey().startAt(friendKey).limitToFirst(pageSize + 1)
        ).valueChanges();

    }

    loadPreviousPage(uid: string, friendKey: string, pageSize: number): Observable<Friend[]> {
        return this.fireDb.list<Friend>(`${USER_DETAILS_CHILD}/${FRIENDS_CHILD}/${uid}`,
            ref => ref.orderByKey().startAt(friendKey).limitToLast(pageSize + 1)
        ).valueChanges();
    }

}
