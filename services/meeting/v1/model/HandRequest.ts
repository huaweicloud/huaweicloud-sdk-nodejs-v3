import { RestHandsUpReqBody } from './RestHandsUpReqBody';


export class HandRequest {
    public conferenceID: string;
    public participantID: string;
    private 'X-Conference-Authorization': string | undefined;
    public body?: RestHandsUpReqBody;
    public constructor(conferenceID?: any, participantID?: any, xConferenceAuthorization?: any) { 
        this['conferenceID'] = conferenceID;
        this['participantID'] = participantID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public withConferenceID(conferenceID: string): HandRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withParticipantID(participantID: string): HandRequest {
        this['participantID'] = participantID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): HandRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization() {
        return this['X-Conference-Authorization'];
    }
    public withBody(body: RestHandsUpReqBody): HandRequest {
        this['body'] = body;
        return this;
    }
}