import { InviteShareDTO } from './InviteShareDTO';


export class InviteShareRequest {
    public conferenceID: string;
    public participantID: string;
    private 'X-Conference-Authorization': string | undefined;
    public body?: InviteShareDTO;
    public constructor(conferenceID?: any, participantID?: any, xConferenceAuthorization?: any) { 
        this['conferenceID'] = conferenceID;
        this['participantID'] = participantID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public withConferenceID(conferenceID: string): InviteShareRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withParticipantID(participantID: string): InviteShareRequest {
        this['participantID'] = participantID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): InviteShareRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization() {
        return this['X-Conference-Authorization'];
    }
    public withBody(body: InviteShareDTO): InviteShareRequest {
        this['body'] = body;
        return this;
    }
}