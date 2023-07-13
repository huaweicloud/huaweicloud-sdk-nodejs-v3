

export class RestBulkHangUpReqBody {
    public bulkHangUpParticipants: Array<string>;
    public constructor(bulkHangUpParticipants?: any) { 
        this['bulkHangUpParticipants'] = bulkHangUpParticipants;
    }
    public withBulkHangUpParticipants(bulkHangUpParticipants: Array<string>): RestBulkHangUpReqBody {
        this['bulkHangUpParticipants'] = bulkHangUpParticipants;
        return this;
    }
}