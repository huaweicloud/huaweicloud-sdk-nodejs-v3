

export class UpdateDpeInfoStatusRequestBody {
    public status?: string;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: string): UpdateDpeInfoStatusRequestBody {
        this['status'] = status;
        return this;
    }
}