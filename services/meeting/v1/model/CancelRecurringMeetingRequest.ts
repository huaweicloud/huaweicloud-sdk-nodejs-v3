

export class CancelRecurringMeetingRequest {
    private 'X-Authorization-Type'?: string | undefined;
    public userUUID?: string;
    private 'X-Site-Id'?: string | undefined;
    public conferenceID: string;
    public type?: number;
    public constructor(conferenceID?: any) { 
        this['conferenceID'] = conferenceID;
    }
    public withXAuthorizationType(xAuthorizationType: string): CancelRecurringMeetingRequest {
        this['X-Authorization-Type'] = xAuthorizationType;
        return this;
    }
    public set xAuthorizationType(xAuthorizationType: string | undefined) {
        this['X-Authorization-Type'] = xAuthorizationType;
    }
    public get xAuthorizationType() {
        return this['X-Authorization-Type'];
    }
    public withUserUUID(userUUID: string): CancelRecurringMeetingRequest {
        this['userUUID'] = userUUID;
        return this;
    }
    public withXSiteId(xSiteId: string): CancelRecurringMeetingRequest {
        this['X-Site-Id'] = xSiteId;
        return this;
    }
    public set xSiteId(xSiteId: string | undefined) {
        this['X-Site-Id'] = xSiteId;
    }
    public get xSiteId() {
        return this['X-Site-Id'];
    }
    public withConferenceID(conferenceID: string): CancelRecurringMeetingRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withType(type: number): CancelRecurringMeetingRequest {
        this['type'] = type;
        return this;
    }
}