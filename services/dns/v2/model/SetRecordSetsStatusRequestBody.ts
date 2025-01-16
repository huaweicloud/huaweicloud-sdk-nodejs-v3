

export class SetRecordSetsStatusRequestBody {
    public status?: string;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: string): SetRecordSetsStatusRequestBody {
        this['status'] = status;
        return this;
    }
}