

export class MfaTotpUser {
    public id: string;
    public passcode: string;
    public constructor(id?: any, passcode?: any) { 
        this['id'] = id;
        this['passcode'] = passcode;
    }
    public withId(id: string): MfaTotpUser {
        this['id'] = id;
        return this;
    }
    public withPasscode(passcode: string): MfaTotpUser {
        this['passcode'] = passcode;
        return this;
    }
}