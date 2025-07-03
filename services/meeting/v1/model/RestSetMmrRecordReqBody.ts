

export class RestSetMmrRecordReqBody {
    public recordType?: number;
    public constructor() { 
    }
    public withRecordType(recordType: number): RestSetMmrRecordReqBody {
        this['recordType'] = recordType;
        return this;
    }
}