

export class ShowConfOrgRequest {
    public conferenceID: string;
    public constructor(conferenceID?: any) { 
        this['conferenceID'] = conferenceID;
    }
    public withConferenceID(conferenceID: string): ShowConfOrgRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
}