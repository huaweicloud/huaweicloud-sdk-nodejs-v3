

export class ListVpnGatewayJobsRequest {
    private 'resource_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withResourceId(resourceId: string): ListVpnGatewayJobsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withLimit(limit: number): ListVpnGatewayJobsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListVpnGatewayJobsRequest {
        this['marker'] = marker;
        return this;
    }
}