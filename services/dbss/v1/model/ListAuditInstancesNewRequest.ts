

export class ListAuditInstancesNewRequest {
    public offset?: string;
    public limit?: string;
    public constructor() { 
    }
    public withOffset(offset: string): ListAuditInstancesNewRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListAuditInstancesNewRequest {
        this['limit'] = limit;
        return this;
    }
}