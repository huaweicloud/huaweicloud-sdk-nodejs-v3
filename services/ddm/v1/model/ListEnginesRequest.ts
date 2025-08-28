

export class ListEnginesRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListEnginesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListEnginesRequest {
        this['limit'] = limit;
        return this;
    }
}