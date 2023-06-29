

export class BroadcastParticipantRequest {
    public conferenceID: string;
    public participantID: string;
    private 'X-Conference-Authorization': string | undefined;
    public constructor(conferenceID?: any, participantID?: any, xConferenceAuthorization?: any) { 
        this['conferenceID'] = conferenceID;
        this['participantID'] = participantID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public withConferenceID(conferenceID: string): BroadcastParticipantRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withParticipantID(participantID: string): BroadcastParticipantRequest {
        this['participantID'] = participantID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): BroadcastParticipantRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization() {
        return this['X-Conference-Authorization'];
    }
}