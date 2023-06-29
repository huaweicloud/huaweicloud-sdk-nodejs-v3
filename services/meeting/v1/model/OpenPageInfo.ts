

export class OpenPageInfo {
    public offset: number;
    public limit: number;
    public count: number;
    public constructor(offset?: any, limit?: any, count?: any) { 
        this['offset'] = offset;
        this['limit'] = limit;
        this['count'] = count;
    }
    public withOffset(offset: number): OpenPageInfo {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): OpenPageInfo {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): OpenPageInfo {
        this['count'] = count;
        return this;
    }
}