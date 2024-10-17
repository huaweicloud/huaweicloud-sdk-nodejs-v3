

export class ListAuditSummaryInfosRequest {
    public offset?: string;
    public limit?: string;
    public constructor() { 
    }
    public withOffset(offset: string): ListAuditSummaryInfosRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListAuditSummaryInfosRequest {
        this['limit'] = limit;
        return this;
    }
}