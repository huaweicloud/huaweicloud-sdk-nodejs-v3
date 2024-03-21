

export class ListCatalogsRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListCatalogsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCatalogsRequest {
        this['limit'] = limit;
        return this;
    }
}