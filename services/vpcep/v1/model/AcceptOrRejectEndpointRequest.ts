import { AcceptOrRejectEndpointRequestBody } from './AcceptOrRejectEndpointRequestBody';


export class AcceptOrRejectEndpointRequest {
    private 'Content-Type'?: string;
    private 'vpc_endpoint_service_id'?: string;
    public body?: AcceptOrRejectEndpointRequestBody;
    public constructor(vpcEndpointServiceId?: string) { 
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
    }
    public withContentType(contentType: string): AcceptOrRejectEndpointRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withVpcEndpointServiceId(vpcEndpointServiceId: string): AcceptOrRejectEndpointRequest {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
        return this;
    }
    public set vpcEndpointServiceId(vpcEndpointServiceId: string  | undefined) {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
    }
    public get vpcEndpointServiceId(): string | undefined {
        return this['vpc_endpoint_service_id'];
    }
    public withBody(body: AcceptOrRejectEndpointRequestBody): AcceptOrRejectEndpointRequest {
        this['body'] = body;
        return this;
    }
}