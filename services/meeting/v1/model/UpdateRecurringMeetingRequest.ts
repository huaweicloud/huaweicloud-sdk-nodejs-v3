import { RestScheduleConfDTO } from './RestScheduleConfDTO';


export class UpdateRecurringMeetingRequest {
    private 'X-Authorization-Type'?: string;
    public userUUID?: string;
    private 'X-Site-Id'?: string;
    public conferenceID?: string;
    public body?: RestScheduleConfDTO;
    public constructor(conferenceID?: string) { 
        this['conferenceID'] = conferenceID;
    }
    public withXAuthorizationType(xAuthorizationType: string): UpdateRecurringMeetingRequest {
        this['X-Authorization-Type'] = xAuthorizationType;
        return this;
    }
    public set xAuthorizationType(xAuthorizationType: string  | undefined) {
        this['X-Authorization-Type'] = xAuthorizationType;
    }
    public get xAuthorizationType(): string | undefined {
        return this['X-Authorization-Type'];
    }
    public withUserUUID(userUUID: string): UpdateRecurringMeetingRequest {
        this['userUUID'] = userUUID;
        return this;
    }
    public withXSiteId(xSiteId: string): UpdateRecurringMeetingRequest {
        this['X-Site-Id'] = xSiteId;
        return this;
    }
    public set xSiteId(xSiteId: string  | undefined) {
        this['X-Site-Id'] = xSiteId;
    }
    public get xSiteId(): string | undefined {
        return this['X-Site-Id'];
    }
    public withConferenceID(conferenceID: string): UpdateRecurringMeetingRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withBody(body: RestScheduleConfDTO): UpdateRecurringMeetingRequest {
        this['body'] = body;
        return this;
    }
}