import { RestCancelSingleRecordCycleConfListReqBody } from './RestCancelSingleRecordCycleConfListReqBody';


export class CancelRecurringSubMeetingRequest {
    private 'X-Authorization-Type'?: string | undefined;
    public userUUID?: string;
    private 'X-Site-Id'?: string | undefined;
    public conferenceID: string;
    public type?: number;
    public body?: RestCancelSingleRecordCycleConfListReqBody;
    public constructor(conferenceID?: any) { 
        this['conferenceID'] = conferenceID;
    }
    public withXAuthorizationType(xAuthorizationType: string): CancelRecurringSubMeetingRequest {
        this['X-Authorization-Type'] = xAuthorizationType;
        return this;
    }
    public set xAuthorizationType(xAuthorizationType: string | undefined) {
        this['X-Authorization-Type'] = xAuthorizationType;
    }
    public get xAuthorizationType() {
        return this['X-Authorization-Type'];
    }
    public withUserUUID(userUUID: string): CancelRecurringSubMeetingRequest {
        this['userUUID'] = userUUID;
        return this;
    }
    public withXSiteId(xSiteId: string): CancelRecurringSubMeetingRequest {
        this['X-Site-Id'] = xSiteId;
        return this;
    }
    public set xSiteId(xSiteId: string | undefined) {
        this['X-Site-Id'] = xSiteId;
    }
    public get xSiteId() {
        return this['X-Site-Id'];
    }
    public withConferenceID(conferenceID: string): CancelRecurringSubMeetingRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withType(type: number): CancelRecurringSubMeetingRequest {
        this['type'] = type;
        return this;
    }
    public withBody(body: RestCancelSingleRecordCycleConfListReqBody): CancelRecurringSubMeetingRequest {
        this['body'] = body;
        return this;
    }
}