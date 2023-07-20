

export class RestBulkHangUpReqBody {
    public bulkHangUpParticipants?: Array<string>;
    public constructor(bulkHangUpParticipants?: Array<string>) { 
        this['bulkHangUpParticipants'] = bulkHangUpParticipants;
    }
    public withBulkHangUpParticipants(bulkHangUpParticipants: Array<string>): RestBulkHangUpReqBody {
        this['bulkHangUpParticipants'] = bulkHangUpParticipants;
        return this;
    }
}