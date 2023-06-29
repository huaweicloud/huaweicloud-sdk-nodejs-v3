import { RestScheduleConfDTO } from './RestScheduleConfDTO';


export class CreateRecurringMeetingRequest {
    private 'X-Authorization-Type'?: string | undefined;
    public userUUID?: string;
    private 'X-Site-Id'?: string | undefined;
    public body?: RestScheduleConfDTO;
    public constructor() { 
    }
    public withXAuthorizationType(xAuthorizationType: string): CreateRecurringMeetingRequest {
        this['X-Authorization-Type'] = xAuthorizationType;
        return this;
    }
    public set xAuthorizationType(xAuthorizationType: string | undefined) {
        this['X-Authorization-Type'] = xAuthorizationType;
    }
    public get xAuthorizationType() {
        return this['X-Authorization-Type'];
    }
    public withUserUUID(userUUID: string): CreateRecurringMeetingRequest {
        this['userUUID'] = userUUID;
        return this;
    }
    public withXSiteId(xSiteId: string): CreateRecurringMeetingRequest {
        this['X-Site-Id'] = xSiteId;
        return this;
    }
    public set xSiteId(xSiteId: string | undefined) {
        this['X-Site-Id'] = xSiteId;
    }
    public get xSiteId() {
        return this['X-Site-Id'];
    }
    public withBody(body: RestScheduleConfDTO): CreateRecurringMeetingRequest {
        this['body'] = body;
        return this;
    }
}