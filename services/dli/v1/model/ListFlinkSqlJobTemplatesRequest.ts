

export class ListFlinkSqlJobTemplatesRequest {
    public limit?: number;
    public name?: string;
    public offset?: number;
    public order?: string;
    public tags?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListFlinkSqlJobTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListFlinkSqlJobTemplatesRequest {
        this['name'] = name;
        return this;
    }
    public withOffset(offset: number): ListFlinkSqlJobTemplatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withOrder(order: string): ListFlinkSqlJobTemplatesRequest {
        this['order'] = order;
        return this;
    }
    public withTags(tags: string): ListFlinkSqlJobTemplatesRequest {
        this['tags'] = tags;
        return this;
    }
}