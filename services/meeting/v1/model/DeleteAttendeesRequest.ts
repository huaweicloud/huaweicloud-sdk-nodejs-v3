import { RestBulkDelAttendReqBody } from './RestBulkDelAttendReqBody';


export class DeleteAttendeesRequest {
    public conferenceID?: string;
    private 'X-Conference-Authorization'?: string;
    public body?: RestBulkDelAttendReqBody;
    public constructor(conferenceID?: string, xConferenceAuthorization?: string) { 
        this['conferenceID'] = conferenceID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public withConferenceID(conferenceID: string): DeleteAttendeesRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): DeleteAttendeesRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string  | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization(): string | undefined {
        return this['X-Conference-Authorization'];
    }
    public withBody(body: RestBulkDelAttendReqBody): DeleteAttendeesRequest {
        this['body'] = body;
        return this;
    }
}