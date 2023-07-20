

export class RestParticipantViewReqBody {
    public viewType?: number;
    public participantID?: string;
    public constructor(viewType?: number, participantID?: string) { 
        this['viewType'] = viewType;
        this['participantID'] = participantID;
    }
    public withViewType(viewType: number): RestParticipantViewReqBody {
        this['viewType'] = viewType;
        return this;
    }
    public withParticipantID(participantID: string): RestParticipantViewReqBody {
        this['participantID'] = participantID;
        return this;
    }
}