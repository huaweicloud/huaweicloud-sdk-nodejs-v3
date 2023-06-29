

export class CreateAnonymousAuthRandomRequest {
    public conferenceID: string;
    private 'X-Password': string | undefined;
    public constructor(conferenceID?: any, xPassword?: any) { 
        this['conferenceID'] = conferenceID;
        this['X-Password'] = xPassword;
    }
    public withConferenceID(conferenceID: string): CreateAnonymousAuthRandomRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withXPassword(xPassword: string): CreateAnonymousAuthRandomRequest {
        this['X-Password'] = xPassword;
        return this;
    }
    public set xPassword(xPassword: string | undefined) {
        this['X-Password'] = xPassword;
    }
    public get xPassword() {
        return this['X-Password'];
    }
}