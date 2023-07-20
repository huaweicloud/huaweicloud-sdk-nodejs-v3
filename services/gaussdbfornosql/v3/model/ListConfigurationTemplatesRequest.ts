

export class ListConfigurationTemplatesRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListConfigurationTemplatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListConfigurationTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
}