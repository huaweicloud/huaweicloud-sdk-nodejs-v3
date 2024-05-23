

export class ListTagsForResourceRequest {
    private 'resource_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withResourceId(resourceId: string): ListTagsForResourceRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withLimit(limit: number): ListTagsForResourceRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListTagsForResourceRequest {
        this['marker'] = marker;
        return this;
    }
}