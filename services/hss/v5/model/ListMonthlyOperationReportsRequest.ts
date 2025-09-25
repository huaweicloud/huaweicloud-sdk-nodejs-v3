

export class ListMonthlyOperationReportsRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListMonthlyOperationReportsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListMonthlyOperationReportsRequest {
        this['offset'] = offset;
        return this;
    }
}