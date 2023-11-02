

export class ListAuditInstancesRequest {
    public offset?: string;
    public limit?: string;
    public constructor() { 
    }
    public withOffset(offset: string): ListAuditInstancesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListAuditInstancesRequest {
        this['limit'] = limit;
        return this;
    }
}