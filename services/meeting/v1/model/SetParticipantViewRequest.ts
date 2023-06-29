import { RestParticipantViewReqBody } from './RestParticipantViewReqBody';


export class SetParticipantViewRequest {
    public conferenceID: string;
    public participantID: string;
    private 'X-Conference-Authorization': string | undefined;
    public body?: RestParticipantViewReqBody;
    public constructor(conferenceID?: any, participantID?: any, xConferenceAuthorization?: any) { 
        this['conferenceID'] = conferenceID;
        this['participantID'] = participantID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public withConferenceID(conferenceID: string): SetParticipantViewRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withParticipantID(participantID: string): SetParticipantViewRequest {
        this['participantID'] = participantID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): SetParticipantViewRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization() {
        return this['X-Conference-Authorization'];
    }
    public withBody(body: RestParticipantViewReqBody): SetParticipantViewRequest {
        this['body'] = body;
        return this;
    }
}