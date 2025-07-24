

export class RestSetMmrRecordReqBody {
    public recordType?: number;
    public constructor(recordType?: number) { 
        this['recordType'] = recordType;
    }
    public withRecordType(recordType: number): RestSetMmrRecordReqBody {
        this['recordType'] = recordType;
        return this;
    }
}