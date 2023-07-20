import { RestAllowWaitingParticipantReqBody } from './RestAllowWaitingParticipantReqBody';


export class AllowWaitingParticipantRequest {
    public conferenceID?: string;
    private 'X-Conference-Authorization'?: string;
    public body?: RestAllowWaitingParticipantReqBody;
    public constructor(conferenceID?: string, xConferenceAuthorization?: string) { 
        this['conferenceID'] = conferenceID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public withConferenceID(conferenceID: string): AllowWaitingParticipantRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): AllowWaitingParticipantRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string  | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization(): string | undefined {
        return this['X-Conference-Authorization'];
    }
    public withBody(body: RestAllowWaitingParticipantReqBody): AllowWaitingParticipantRequest {
        this['body'] = body;
        return this;
    }
}