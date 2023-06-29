import { RestScheduleConfDTO } from './RestScheduleConfDTO';


export class UpdateMeetingRequest {
    public conferenceID: string;
    public userUUID?: string;
    private 'X-Authorization-Type'?: string | undefined;
    private 'X-Site-Id'?: string | undefined;
    public body?: RestScheduleConfDTO;
    public constructor(conferenceID?: any) { 
        this['conferenceID'] = conferenceID;
    }
    public withConferenceID(conferenceID: string): UpdateMeetingRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withUserUUID(userUUID: string): UpdateMeetingRequest {
        this['userUUID'] = userUUID;
        return this;
    }
    public withXAuthorizationType(xAuthorizationType: string): UpdateMeetingRequest {
        this['X-Authorization-Type'] = xAuthorizationType;
        return this;
    }
    public set xAuthorizationType(xAuthorizationType: string | undefined) {
        this['X-Authorization-Type'] = xAuthorizationType;
    }
    public get xAuthorizationType() {
        return this['X-Authorization-Type'];
    }
    public withXSiteId(xSiteId: string): UpdateMeetingRequest {
        this['X-Site-Id'] = xSiteId;
        return this;
    }
    public set xSiteId(xSiteId: string | undefined) {
        this['X-Site-Id'] = xSiteId;
    }
    public get xSiteId() {
        return this['X-Site-Id'];
    }
    public withBody(body: RestScheduleConfDTO): UpdateMeetingRequest {
        this['body'] = body;
        return this;
    }
}