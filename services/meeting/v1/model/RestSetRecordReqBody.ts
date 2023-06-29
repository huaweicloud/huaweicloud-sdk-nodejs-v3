

export class RestSetRecordReqBody {
    public isRecord: number;
    public constructor(isRecord?: any) { 
        this['isRecord'] = isRecord;
    }
    public withIsRecord(isRecord: number): RestSetRecordReqBody {
        this['isRecord'] = isRecord;
        return this;
    }
}