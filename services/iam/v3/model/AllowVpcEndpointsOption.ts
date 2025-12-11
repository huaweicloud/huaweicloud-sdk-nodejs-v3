

export class AllowVpcEndpointsOption {
    public description?: string;
    private 'vpc_endpoint_id'?: string;
    public constructor(vpcEndpointId?: string) { 
        this['vpc_endpoint_id'] = vpcEndpointId;
    }
    public withDescription(description: string): AllowVpcEndpointsOption {
        this['description'] = description;
        return this;
    }
    public withVpcEndpointId(vpcEndpointId: string): AllowVpcEndpointsOption {
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