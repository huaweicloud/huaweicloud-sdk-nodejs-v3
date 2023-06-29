import { RestAllowClientRecordReqBody } from './RestAllowClientRecordReqBody';


export class AllowClientRecordRequest {
    public conferenceID: string;
    private 'X-Conference-Authorization': string | undefined;
    public participantID: string;
    public body?: RestAllowClientRecordReqBody;
    public constructor(conferenceID?: any, xConferenceAuthorization?: any, participantID?: any) { 
        this['conferenceID'] = conferenceID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        this['participantID'] = participantID;
    }
    public withConferenceID(conferenceID: string): AllowClientRecordRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): AllowClientRecordRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization() {
        return this['X-Conference-Authorization'];
    }
    public withParticipantID(participantID: string): AllowClientRecordRequest {
        this['participantID'] = participantID;
        return this;
    }
    public withBody(body: RestAllowClientRecordReqBody): AllowClientRecordRequest {
        this['body'] = body;
        return this;
    }
}