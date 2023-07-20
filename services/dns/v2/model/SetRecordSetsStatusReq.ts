

export class SetRecordSetsStatusReq {
    public status?: string;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: string): SetRecordSetsStatusReq {
        this['status'] = status;
        return this;
    }
}