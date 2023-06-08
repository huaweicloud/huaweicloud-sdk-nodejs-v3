

export class UpdatePublicZoneStatusRequestBody {
    public status: string;
    public constructor(status?: any) { 
        this['status'] = status;
    }
    public withStatus(status: string): UpdatePublicZoneStatusRequestBody {
        this['status'] = status;
        return this;
    }
}