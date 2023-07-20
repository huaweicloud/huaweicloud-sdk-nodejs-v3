

export class UpdatePublicZoneStatusRequestBody {
    public status?: string;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: string): UpdatePublicZoneStatusRequestBody {
        this['status'] = status;
        return this;
    }
}