

export class DeleteEndpointPolicyRequest {
    private 'vpc_endpoint_id': string | undefined;
    private 'Content-Type': string | undefined;
    public constructor(vpcEndpointId?: any, contentType?: any) { 
        this['vpc_endpoint_id'] = vpcEndpointId;
        this['Content-Type'] = contentType;
    }
    public withVpcEndpointId(vpcEndpointId: string): DeleteEndpointPolicyRequest {
        this['vpc_endpoint_id'] = vpcEndpointId;
        return this;
    }
    public set vpcEndpointId(vpcEndpointId: string | undefined) {
        this['vpc_endpoint_id'] = vpcEndpointId;
    }
    public get vpcEndpointId() {
        return this['vpc_endpoint_id'];
    }
    public withContentType(contentType: string): DeleteEndpointPolicyRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
}