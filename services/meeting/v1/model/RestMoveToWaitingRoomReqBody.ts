

export class RestMoveToWaitingRoomReqBody {
    public participantID: string;
    public constructor(participantID?: any) { 
        this['participantID'] = participantID;
    }
    public withParticipantID(participantID: string): RestMoveToWaitingRoomReqBody {
        this['participantID'] = participantID;
        return this;
    }
}