

export class ListEndpointInfoDetailsRequest {
    private 'Content-Type'?: string;
    private 'vpc_endpoint_id'?: string;
    public constructor(vpcEndpointId?: string) { 
        this['vpc_endpoint_id'] = vpcEndpointId;
    }
    public withContentType(contentType: string): ListEndpointInfoDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withVpcEndpointId(vpcEndpointId: string): ListEndpointInfoDetailsRequest {
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