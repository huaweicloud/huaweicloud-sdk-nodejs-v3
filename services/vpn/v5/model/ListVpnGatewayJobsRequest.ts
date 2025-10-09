

export class ListVpnGatewayJobsRequest {
    private 'resource_id'?: string;
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
}