

export class StartRequest {
    public conferenceID?: string;
    public password?: string;
    public constructor(conferenceID?: string, password?: string) { 
        this['conferenceID'] = conferenceID;
        this['password'] = password;
    }
    public withConferenceID(conferenceID: string): StartRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withPassword(password: string): StartRequest {
        this['password'] = password;
        return this;
    }
}