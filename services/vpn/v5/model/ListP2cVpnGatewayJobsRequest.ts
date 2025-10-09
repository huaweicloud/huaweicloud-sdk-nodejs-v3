

export class ListP2cVpnGatewayJobsRequest {
    private 'resource_id'?: string;
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
}