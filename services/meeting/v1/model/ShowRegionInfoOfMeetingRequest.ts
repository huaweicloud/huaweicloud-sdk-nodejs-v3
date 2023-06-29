

export class ShowRegionInfoOfMeetingRequest {
    public conferenceID: string;
    public constructor(conferenceID?: any) { 
        this['conferenceID'] = conferenceID;
    }
    public withConferenceID(conferenceID: string): ShowRegionInfoOfMeetingRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
}