

export class RestAllowWaitingParticipantReqBody {
    public participantID?: string;
    public allowAll?: boolean;
    public constructor() { 
    }
    public withParticipantID(participantID: string): RestAllowWaitingParticipantReqBody {
        this['participantID'] = participantID;
        return this;
    }
    public withAllowAll(allowAll: boolean): RestAllowWaitingParticipantReqBody {
        this['allowAll'] = allowAll;
        return this;
    }
}