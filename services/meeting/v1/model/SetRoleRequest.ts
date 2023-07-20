import { RestChairTokenReqBody } from './RestChairTokenReqBody';


export class SetRoleRequest {
    public conferenceID?: string;
    public participantID?: string;
    private 'X-Conference-Authorization'?: string;
    public body?: RestChairTokenReqBody;
    public constructor(conferenceID?: string, participantID?: string, xConferenceAuthorization?: string) { 
        this['conferenceID'] = conferenceID;
        this['participantID'] = participantID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public withConferenceID(conferenceID: string): SetRoleRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withParticipantID(participantID: string): SetRoleRequest {
        this['participantID'] = participantID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): SetRoleRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string  | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization(): string | undefined {
        return this['X-Conference-Authorization'];
    }
    public withBody(body: RestChairTokenReqBody): SetRoleRequest {
        this['body'] = body;
        return this;
    }
}