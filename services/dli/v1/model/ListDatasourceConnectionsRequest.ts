

export class ListDatasourceConnectionsRequest {
    public tags?: string;
    public constructor() { 
    }
    public withTags(tags: string): ListDatasourceConnectionsRequest {
        this['tags'] = tags;
        return this;
    }
}