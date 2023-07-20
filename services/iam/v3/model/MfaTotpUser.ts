

export class MfaTotpUser {
    public id?: string;
    public passcode?: string;
    public constructor(id?: string, passcode?: string) { 
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