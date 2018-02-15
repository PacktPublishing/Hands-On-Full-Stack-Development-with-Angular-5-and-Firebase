import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {CHAT_MESSAGES_CHILD, MESSAGE_DETAILS_CHILD, USER_DETAILS_CHILD} from './database-constants';
import 'firebase/storage';
import {Observable} from 'rxjs/Observable';
import {Message} from './message';

/**
 * Messaging service
 *
 */
@Injectable()
export class MessagingService {

    key: string;

    /**
     * Constructor
     *
     * @param {AngularFireDatabase} fireDb provides the functionality related to authentication
     */
    constructor(private fireDb: AngularFireDatabase) {
    }

    isMessagePresent(uid: string, friendUid: string): Observable<any> {
        return this.fireDb.object(`${USER_DETAILS_CHILD}/${CHAT_MESSAGES_CHILD}/${uid}/${friendUid}`).valueChanges();
    }

    createNewMessage(newMessage: Message) {
        const messageKey = this.fireDb.createPushId();
        this.fireDb.object(`${MESSAGE_DETAILS_CHILD}/${this.key}/${messageKey}`).set(newMessage).catch(error => {
            console.log(error);
        });
    }

    freshlyCreateChatIDEntry(uid: string, friendUid: string): string {
        const key = this.fireDb.createPushId();
        this.fireDb.object(`${USER_DETAILS_CHILD}/${CHAT_MESSAGES_CHILD}/${uid}/${friendUid}`).set({key: key});
        this.fireDb.object(`${USER_DETAILS_CHILD}/${CHAT_MESSAGES_CHILD}/${friendUid}/${uid}`).set({key: key});
        return key;
    }

    getMessages(key: string): Observable<Message[]> {
        return this.fireDb.list<Message>(`${MESSAGE_DETAILS_CHILD}/${key}`).valueChanges();
    }

    setKey(key: string) {
        this.key = key;
    }
}
