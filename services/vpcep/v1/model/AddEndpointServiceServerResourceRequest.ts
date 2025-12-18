import { AddEndpointServiceServerResourceRequestBody } from './AddEndpointServiceServerResourceRequestBody';


export class AddEndpointServiceServerResourceRequest {
    private 'vpc_endpoint_service_id'?: string;
    private 'Content-Type'?: string;
    public body?: AddEndpointServiceServerResourceRequestBody;
    public constructor(vpcEndpointServiceId?: string) { 
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
    }
    public withVpcEndpointServiceId(vpcEndpointServiceId: string): AddEndpointServiceServerResourceRequest {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
        return this;
    }
    public set vpcEndpointServiceId(vpcEndpointServiceId: string  | undefined) {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
    }
    public get vpcEndpointServiceId(): string | undefined {
        return this['vpc_endpoint_service_id'];
    }
    public withContentType(contentType: string): AddEndpointServiceServerResourceRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: AddEndpointServiceServerResourceRequestBody): AddEndpointServiceServerResourceRequest {
        this['body'] = body;
        return this;
    }
}