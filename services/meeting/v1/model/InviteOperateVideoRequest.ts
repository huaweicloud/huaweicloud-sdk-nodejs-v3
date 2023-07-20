import { RestVideoBody } from './RestVideoBody';


export class InviteOperateVideoRequest {
    public conferenceID?: string;
    public participantID?: string;
    private 'X-Conference-Authorization'?: string;
    public body?: RestVideoBody;
    public constructor(conferenceID?: string, participantID?: string, xConferenceAuthorization?: string) { 
        this['conferenceID'] = conferenceID;
        this['participantID'] = participantID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public withConferenceID(conferenceID: string): InviteOperateVideoRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withParticipantID(participantID: string): InviteOperateVideoRequest {
        this['participantID'] = participantID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): InviteOperateVideoRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string  | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization(): string | undefined {
        return this['X-Conference-Authorization'];
    }
    public withBody(body: RestVideoBody): InviteOperateVideoRequest {
        this['body'] = body;
        return this;
    }
}