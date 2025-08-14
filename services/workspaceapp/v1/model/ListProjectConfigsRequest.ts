

export class ListProjectConfigsRequest {
    public offset?: number;
    public limit?: number;
    public name?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListProjectConfigsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListProjectConfigsRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListProjectConfigsRequest {
        this['name'] = name;
        return this;
    }
}