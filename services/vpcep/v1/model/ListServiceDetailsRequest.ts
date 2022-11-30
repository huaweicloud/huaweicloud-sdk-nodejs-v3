

export class ListServiceDetailsRequest {
    private 'Content-Type': string | undefined;
    private 'vpc_endpoint_service_id': string | undefined;
    public constructor(contentType?: any, vpcEndpointServiceId?: any) { 
        this['Content-Type'] = contentType;
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
    }
    public withContentType(contentType: string): ListServiceDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withVpcEndpointServiceId(vpcEndpointServiceId: string): ListServiceDetailsRequest {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
        return this;
    }
    public set vpcEndpointServiceId(vpcEndpointServiceId: string | undefined) {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
    }
    public get vpcEndpointServiceId() {
        return this['vpc_endpoint_service_id'];
    }
}