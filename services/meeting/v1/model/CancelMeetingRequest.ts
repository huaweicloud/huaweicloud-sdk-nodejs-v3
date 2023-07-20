

export class CancelMeetingRequest {
    public conferenceID?: string;
    public userUUID?: string;
    public type?: number;
    private 'X-Authorization-Type'?: string;
    private 'X-Site-Id'?: string;
    public constructor(conferenceID?: string) { 
        this['conferenceID'] = conferenceID;
    }
    public withConferenceID(conferenceID: string): CancelMeetingRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withUserUUID(userUUID: string): CancelMeetingRequest {
        this['userUUID'] = userUUID;
        return this;
    }
    public withType(type: number): CancelMeetingRequest {
        this['type'] = type;
        return this;
    }
    public withXAuthorizationType(xAuthorizationType: string): CancelMeetingRequest {
        this['X-Authorization-Type'] = xAuthorizationType;
        return this;
    }
    public set xAuthorizationType(xAuthorizationType: string  | undefined) {
        this['X-Authorization-Type'] = xAuthorizationType;
    }
    public get xAuthorizationType(): string | undefined {
        return this['X-Authorization-Type'];
    }
    public withXSiteId(xSiteId: string): CancelMeetingRequest {
        this['X-Site-Id'] = xSiteId;
        return this;
    }
    public set xSiteId(xSiteId: string  | undefined) {
        this['X-Site-Id'] = xSiteId;
    }
    public get xSiteId(): string | undefined {
        return this['X-Site-Id'];
    }
}