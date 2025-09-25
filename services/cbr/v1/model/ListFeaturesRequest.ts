

export class ListFeaturesRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListFeaturesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListFeaturesRequest {
        this['offset'] = offset;
        return this;
    }
}