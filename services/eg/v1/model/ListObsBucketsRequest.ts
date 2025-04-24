

export class ListObsBucketsRequest {
    public offset?: number;
    public limit?: number;
    public sort?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListObsBucketsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListObsBucketsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSort(sort: string): ListObsBucketsRequest {
        this['sort'] = sort;
        return this;
    }
}