

export class ListResourceJobsRequest {
    private 'resource_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withResourceId(resourceId: string): ListResourceJobsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withLimit(limit: number): ListResourceJobsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListResourceJobsRequest {
        this['marker'] = marker;
        return this;
    }
}