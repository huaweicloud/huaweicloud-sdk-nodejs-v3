

export class SetRecordSetsStatusReq {
    public status: string;
    public constructor(status?: any) { 
        this['status'] = status;
    }
    public withStatus(status: string): SetRecordSetsStatusReq {
        this['status'] = status;
        return this;
    }
}