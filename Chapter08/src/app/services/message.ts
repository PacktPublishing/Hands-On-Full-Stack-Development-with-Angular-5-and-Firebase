export class Message {

    message: string;

    senderUid: string;

    receiverUid: string;

    timestamp: number;

    constructor(message: string,
                senderUid: string,
                receiverUid: string,
                timestamp: number) {
        this.message = message;
        this.senderUid = senderUid;
        this.receiverUid = receiverUid;
        this.timestamp = timestamp;
    }

}
