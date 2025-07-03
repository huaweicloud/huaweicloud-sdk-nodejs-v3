

export class RestBatchMoveToWaitingRoomReqBody {
    public batchParticipants?: Array<string>;
    public constructor() { 
    }
    public withBatchParticipants(batchParticipants: Array<string>): RestBatchMoveToWaitingRoomReqBody {
        this['batchParticipants'] = batchParticipants;
        return this;
    }
}