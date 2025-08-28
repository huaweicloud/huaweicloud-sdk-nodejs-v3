

export class ListDdmConfigurationsRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListDdmConfigurationsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDdmConfigurationsRequest {
        this['limit'] = limit;
        return this;
    }
}