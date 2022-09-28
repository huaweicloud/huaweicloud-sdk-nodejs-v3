

export class DeleteEndpointRequest {
    private 'Content-Type': string | undefined;
    private 'vpc_endpoint_id': string | undefined;
    public constructor(contentType?: any, vpcEndpointId?: any) { 
        this['Content-Type'] = contentType;
        this['vpc_endpoint_id'] = vpcEndpointId;
    }
    public withContentType(contentType: string): DeleteEndpointRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withVpcEndpointId(vpcEndpointId: string): DeleteEndpointRequest {
        this['vpc_endpoint_id'] = vpcEndpointId;
        return this;
    }
    public set vpcEndpointId(vpcEndpointId: string | undefined) {
        this['vpc_endpoint_id'] = vpcEndpointId;
    }
    public get vpcEndpointId() {
        return this['vpc_endpoint_id'];
    }
}