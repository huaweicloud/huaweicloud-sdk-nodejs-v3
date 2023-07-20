

export class DeleteEndpointPolicyRequest {
    private 'vpc_endpoint_id'?: string;
    private 'Content-Type'?: string;
    public constructor(vpcEndpointId?: string) { 
        this['vpc_endpoint_id'] = vpcEndpointId;
    }
    public withVpcEndpointId(vpcEndpointId: string): DeleteEndpointPolicyRequest {
        this['vpc_endpoint_id'] = vpcEndpointId;
        return this;
    }
    public set vpcEndpointId(vpcEndpointId: string  | undefined) {
        this['vpc_endpoint_id'] = vpcEndpointId;
    }
    public get vpcEndpointId(): string | undefined {
        return this['vpc_endpoint_id'];
    }
    public withContentType(contentType: string): DeleteEndpointPolicyRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}