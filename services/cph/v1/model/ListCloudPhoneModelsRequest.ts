

export class ListCloudPhoneModelsRequest {
    public status?: number;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withStatus(status: number): ListCloudPhoneModelsRequest {
        this['status'] = status;
        return this;
    }
    public withOffset(offset: number): ListCloudPhoneModelsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCloudPhoneModelsRequest {
        this['limit'] = limit;
        return this;
    }
}