

export class ShowTenantAssginRecordRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ShowTenantAssginRecordRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowTenantAssginRecordRequest {
        this['offset'] = offset;
        return this;
    }
}