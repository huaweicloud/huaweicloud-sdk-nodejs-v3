

export class Pages {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public constructor() { 
    }
    public withOffset(offset: number): Pages {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): Pages {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): Pages {
        this['count'] = count;
        return this;
    }
}