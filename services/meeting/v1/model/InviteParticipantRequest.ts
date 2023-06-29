import { RestInviteReqBody } from './RestInviteReqBody';


export class InviteParticipantRequest {
    public conferenceID: string;
    private 'X-Conference-Authorization': string | undefined;
    public body?: RestInviteReqBody;
    public constructor(conferenceID?: any, xConferenceAuthorization?: any) { 
        this['conferenceID'] = conferenceID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public withConferenceID(conferenceID: string): InviteParticipantRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): InviteParticipantRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization() {
        return this['X-Conference-Authorization'];
    }
    public withBody(body: RestInviteReqBody): InviteParticipantRequest {
        this['body'] = body;
        return this;
    }
}