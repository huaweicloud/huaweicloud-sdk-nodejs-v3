

export class ListAuditInstancesLastRequest {
    public offset?: string;
    public limit?: string;
    public constructor() { 
    }
    public withOffset(offset: string): ListAuditInstancesLastRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListAuditInstancesLastRequest {
        this['limit'] = limit;
        return this;
    }
}