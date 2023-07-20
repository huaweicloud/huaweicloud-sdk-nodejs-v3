

export class ShowConfOrgRequest {
    public conferenceID?: string;
    public constructor(conferenceID?: string) { 
        this['conferenceID'] = conferenceID;
    }
    public withConferenceID(conferenceID: string): ShowConfOrgRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
}