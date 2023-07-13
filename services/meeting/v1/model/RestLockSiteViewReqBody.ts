

export class RestLockSiteViewReqBody {
    public status: number;
    public participantID: string;
    public constructor(status?: any, participantID?: any) { 
        this['status'] = status;
        this['participantID'] = participantID;
    }
    public withStatus(status: number): RestLockSiteViewReqBody {
        this['status'] = status;
        return this;
    }
    public withParticipantID(participantID: string): RestLockSiteViewReqBody {
        this['participantID'] = participantID;
        return this;
    }
}