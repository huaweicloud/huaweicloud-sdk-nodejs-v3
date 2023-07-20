

export class ShowRegionInfoOfMeetingRequest {
    public conferenceID?: string;
    public constructor(conferenceID?: string) { 
        this['conferenceID'] = conferenceID;
    }
    public withConferenceID(conferenceID: string): ShowRegionInfoOfMeetingRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
}