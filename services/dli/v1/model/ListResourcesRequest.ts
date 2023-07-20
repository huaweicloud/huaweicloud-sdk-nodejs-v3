

export class ListResourcesRequest {
    public kind?: string;
    public tags?: string;
    public constructor() { 
    }
    public withKind(kind: string): ListResourcesRequest {
        this['kind'] = kind;
        return this;
    }
    public withTags(tags: string): ListResourcesRequest {
        this['tags'] = tags;
        return this;
    }
}