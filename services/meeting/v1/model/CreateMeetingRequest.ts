import { RestScheduleConfDTO } from './RestScheduleConfDTO';


export class CreateMeetingRequest {
    public userUUID?: string;
    private 'X-Authorization-Type'?: string;
    private 'X-Site-Id'?: string;
    public body?: RestScheduleConfDTO;
    public constructor() { 
    }
    public withUserUUID(userUUID: string): CreateMeetingRequest {
        this['userUUID'] = userUUID;
        return this;
    }
    public withXAuthorizationType(xAuthorizationType: string): CreateMeetingRequest {
        this['X-Authorization-Type'] = xAuthorizationType;
        return this;
    }
    public set xAuthorizationType(xAuthorizationType: string  | undefined) {
        this['X-Authorization-Type'] = xAuthorizationType;
    }
    public get xAuthorizationType(): string | undefined {
        return this['X-Authorization-Type'];
    }
    public withXSiteId(xSiteId: string): CreateMeetingRequest {
        this['X-Site-Id'] = xSiteId;
        return this;
    }
    public set xSiteId(xSiteId: string  | undefined) {
        this['X-Site-Id'] = xSiteId;
    }
    public get xSiteId(): string | undefined {
        return this['X-Site-Id'];
    }
    public withBody(body: RestScheduleConfDTO): CreateMeetingRequest {
        this['body'] = body;
        return this;
    }
}