

export class ListEnginesRequest {
    public offset?: number;
    public limit?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListEnginesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListEnginesRequest {
        this['limit'] = limit;
        return this;
    }
}