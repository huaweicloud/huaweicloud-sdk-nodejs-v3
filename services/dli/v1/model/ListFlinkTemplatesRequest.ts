

export class ListFlinkTemplatesRequest {
    public limit?: number;
    public name?: string;
    public offset?: number;
    public order?: string;
    public tags?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListFlinkTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListFlinkTemplatesRequest {
        this['name'] = name;
        return this;
    }
    public withOffset(offset: number): ListFlinkTemplatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withOrder(order: string): ListFlinkTemplatesRequest {
        this['order'] = order;
        return this;
    }
    public withTags(tags: string): ListFlinkTemplatesRequest {
        this['tags'] = tags;
        return this;
    }
}