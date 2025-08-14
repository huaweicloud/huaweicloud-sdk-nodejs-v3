

export class CollectResourcesPolicyStatesSummaryRequest {
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withResourceId(resourceId: string): CollectResourcesPolicyStatesSummaryRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): CollectResourcesPolicyStatesSummaryRequest {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withLimit(limit: number): CollectResourcesPolicyStatesSummaryRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): CollectResourcesPolicyStatesSummaryRequest {
        this['marker'] = marker;
        return this;
    }
}