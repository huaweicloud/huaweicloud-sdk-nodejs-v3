

export class ListP2cVpnGatewayJobsRequest {
    private 'resource_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withResourceId(resourceId: string): ListP2cVpnGatewayJobsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withLimit(limit: number): ListP2cVpnGatewayJobsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListP2cVpnGatewayJobsRequest {
        this['marker'] = marker;
        return this;
    }
}