import {FriendsDatePipe} from './friendsdate.pipe';

describe('friendsdatepipe', () => {

    const pipe = new FriendsDatePipe();

    it('Transform dateInMillis to MM/DD/YY', () => {
        expect(pipe.transform('1506854340801')).toBe('10/01/17');
    });

    it('Transform invalid date', () => {
        expect(pipe.transform('-1')).toBe('Invalid Date');
    });

});
