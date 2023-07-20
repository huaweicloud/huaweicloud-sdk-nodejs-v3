

export class ListConfigurationsRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListConfigurationsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListConfigurationsRequest {
        this['limit'] = limit;
        return this;
    }
}