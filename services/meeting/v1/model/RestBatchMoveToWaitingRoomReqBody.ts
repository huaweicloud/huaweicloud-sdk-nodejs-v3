

export class RestBatchMoveToWaitingRoomReqBody {
    public batchParticipants?: Array<string>;
    public constructor(batchParticipants?: Array<string>) { 
        this['batchParticipants'] = batchParticipants;
    }
    public withBatchParticipants(batchParticipants: Array<string>): RestBatchMoveToWaitingRoomReqBody {
        this['batchParticipants'] = batchParticipants;
        return this;
    }
}