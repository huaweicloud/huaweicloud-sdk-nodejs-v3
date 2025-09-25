

export class AllowVpcEndpointsResult {
    public description?: string;
    private 'vpc_endpoint_id'?: string;
    public constructor(description?: string, vpcEndpointId?: string) { 
        this['description'] = description;
        this['vpc_endpoint_id'] = vpcEndpointId;
    }
    public withDescription(description: string): AllowVpcEndpointsResult {
        this['description'] = description;
        return this;
    }
    public withVpcEndpointId(vpcEndpointId: string): AllowVpcEndpointsResult {
        this['vpc_endpoint_id'] = vpcEndpointId;
        return this;
    }
    public set vpcEndpointId(vpcEndpointId: string  | undefined) {
        this['vpc_endpoint_id'] = vpcEndpointId;
    }
    public get vpcEndpointId(): string | undefined {
        return this['vpc_endpoint_id'];
    }
}