import {UserService} from './user.service';
import {AngularFireDatabase, PathReference} from 'angularfire2/database';
import {mockUserJSON} from '../test-data/user-test-data';
import {TestBed} from '@angular/core/testing';
import {Observable} from 'rxjs/Observable';

class AngularFireDatabaseStub {

    app: AngularFireAppStub = new AngularFireAppStub;

    angularFireObject: AngularFireObjectStub;

    constructor(angularFireObject: AngularFireObjectStub) {
        this.angularFireObject = angularFireObject;
    }

    object(pathOrRef: PathReference): AngularFireObjectStub {
        return this.angularFireObject;
    }
}

class AngularFireAppStub {

    storage() {
    }
}

class AngularFireObjectStub {

    set() {
    }

    valueChanges() {
    }

    update() {
    }

}

describe('User service test suites', () => {

    const angularFireObject: AngularFireObjectStub = new AngularFireObjectStub();
    const mockAngularFireDatabase: AngularFireDatabaseStub = new AngularFireDatabaseStub(angularFireObject);
    let userService: UserService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {provide: AngularFireDatabase, useValue: mockAngularFireDatabase},
                {provide: UserService, useClass: UserService}
            ]
        });
        userService = TestBed.get(UserService);
    });

    it('Add user', () => {
        spyOn(angularFireObject, 'set');
        userService.addUser(mockUserJSON);
        expect(angularFireObject.set).toHaveBeenCalled();
    });

    it('getUser return valid user', () => {
        spyOn(angularFireObject, 'valueChanges').and.returnValue(Observable.of(mockUserJSON));
        userService.getUser(mockUserJSON.uid).subscribe((user) => {
            expect(angularFireObject.valueChanges).toHaveBeenCalled();
            expect(user.uid).toBe(mockUserJSON.uid);
            expect(user.name).toBe(mockUserJSON.name);
            expect(user.mobile).toBe(mockUserJSON.mobile);
            expect(user.email).toBe(mockUserJSON.email);
        });

    });

    it('saveUser saves user in Subject', () => {
        userService.saveUser(mockUserJSON);
        userService.getSavedUser().subscribe((user) => {
            expect(user.uid).toBe(mockUserJSON.uid);
            expect(user.name).toBe(mockUserJSON.name);
            expect(user.mobile).toBe(mockUserJSON.mobile);
            expect(user.email).toBe(mockUserJSON.email);
        });

    });

    it('updateEmail update the email', () => {
        spyOn(angularFireObject, 'update');
        userService.saveUser(mockUserJSON);
        mockUserJSON.email = 'user1@gmail.com';
        userService.updateEmail(mockUserJSON, mockUserJSON.email);
        userService.getSavedUser().subscribe((user) => {
            expect(angularFireObject.update).toHaveBeenCalled();
            expect(user.email).toBe(mockUserJSON.email);
        });

    });

    it('updateMobile update the mobile', () => {
        spyOn(angularFireObject, 'update');
        userService.saveUser(mockUserJSON);
        mockUserJSON.mobile = '88888888';
        userService.updateEmail(mockUserJSON, mockUserJSON.mobile);
        userService.getSavedUser().subscribe((user) => {
            expect(angularFireObject.update).toHaveBeenCalled();
            expect(user.mobile).toBe(mockUserJSON.mobile);
        });
    });
});
