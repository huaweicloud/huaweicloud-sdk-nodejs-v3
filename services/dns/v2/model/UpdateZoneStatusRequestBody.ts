

export class UpdateZoneStatusRequestBody {
    public status?: string;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: string): UpdateZoneStatusRequestBody {
        this['status'] = status;
        return this;
    }
}