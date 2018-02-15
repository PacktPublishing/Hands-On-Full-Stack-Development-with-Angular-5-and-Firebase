export class User {

    email: string;

    name: string;

    mobile: string;

    uid: string;

    friendcount: number;

    image: string;

    constructor(email: string,
                name: string,
                mobile: string,
                uid: string,
                friendcount: number,
                image: string) {
        this.email = email;
        this.name = name;
        this.mobile = mobile;
        this.uid = uid;
        this.friendcount = friendcount;
        this.image = image;
    }
}
