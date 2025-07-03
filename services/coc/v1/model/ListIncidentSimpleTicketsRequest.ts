

export class ListIncidentSimpleTicketsRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListIncidentSimpleTicketsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListIncidentSimpleTicketsRequest {
        this['limit'] = limit;
        return this;
    }
}