

export class RestSetRecordReqBody {
    public isRecord?: number;
    public constructor(isRecord?: number) { 
        this['isRecord'] = isRecord;
    }
    public withIsRecord(isRecord: number): RestSetRecordReqBody {
        this['isRecord'] = isRecord;
        return this;
    }
}