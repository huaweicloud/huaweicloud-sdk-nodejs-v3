

export class RestAllowClientRecordReqBody {
    public allowClientRecord?: number;
    public constructor(allowClientRecord?: number) { 
        this['allowClientRecord'] = allowClientRecord;
    }
    public withAllowClientRecord(allowClientRecord: number): RestAllowClientRecordReqBody {
        this['allowClientRecord'] = allowClientRecord;
        return this;
    }
}