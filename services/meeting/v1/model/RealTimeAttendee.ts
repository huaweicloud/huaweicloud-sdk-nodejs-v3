

export class RealTimeAttendee {
    public accountID?: string;
    public userUUID?: string;
    public name?: string;
    public phone?: string;
    public phoneLeft?: string;
    public phoneRight?: string;
    public constructor() { 
    }
    public withAccountID(accountID: string): RealTimeAttendee {
        this['accountID'] = accountID;
        return this;
    }
    public withUserUUID(userUUID: string): RealTimeAttendee {
        this['userUUID'] = userUUID;
        return this;
    }
    public withName(name: string): RealTimeAttendee {
        this['name'] = name;
        return this;
    }
    public withPhone(phone: string): RealTimeAttendee {
        this['phone'] = phone;
        return this;
    }
    public withPhoneLeft(phoneLeft: string): RealTimeAttendee {
        this['phoneLeft'] = phoneLeft;
        return this;
    }
    public withPhoneRight(phoneRight: string): RealTimeAttendee {
        this['phoneRight'] = phoneRight;
        return this;
    }
}