

export class ListEndpointInfoDetailsRequest {
    private 'Content-Type'?: string | undefined;
    private 'vpc_endpoint_id': string | undefined;
    public constructor(vpcEndpointId?: any) { 
        this['vpc_endpoint_id'] = vpcEndpointId;
    }
    public withContentType(contentType: string): ListEndpointInfoDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withVpcEndpointId(vpcEndpointId: string): ListEndpointInfoDetailsRequest {
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