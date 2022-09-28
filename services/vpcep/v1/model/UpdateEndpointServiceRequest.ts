import { UpdateEndpointServiceRequestBody } from './UpdateEndpointServiceRequestBody';


export class UpdateEndpointServiceRequest {
    private 'Content-Type': string | undefined;
    private 'vpc_endpoint_service_id': string | undefined;
    public body?: UpdateEndpointServiceRequestBody;
    public constructor(contentType?: any, vpcEndpointServiceId?: any) { 
        this['Content-Type'] = contentType;
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
    }
    public withContentType(contentType: string): UpdateEndpointServiceRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withVpcEndpointServiceId(vpcEndpointServiceId: string): UpdateEndpointServiceRequest {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
        return this;
    }
    public set vpcEndpointServiceId(vpcEndpointServiceId: string | undefined) {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
    }
    public get vpcEndpointServiceId() {
        return this['vpc_endpoint_service_id'];
    }
    public withBody(body: UpdateEndpointServiceRequestBody): UpdateEndpointServiceRequest {
        this['body'] = body;
        return this;
    }
}