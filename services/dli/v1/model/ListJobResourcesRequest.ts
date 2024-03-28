

export class ListJobResourcesRequest {
    public kind?: string;
    public tags?: string;
    public constructor() { 
    }
    public withKind(kind: string): ListJobResourcesRequest {
        this['kind'] = kind;
        return this;
    }
    public withTags(tags: string): ListJobResourcesRequest {
        this['tags'] = tags;
        return this;
    }
}