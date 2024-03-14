import { BatchRemoveEndpointServicePermissionsRequestBody } from './BatchRemoveEndpointServicePermissionsRequestBody';


export class BatchRemoveEndpointServicePermissionsRequest {
    private 'Content-Type'?: string;
    private 'vpc_endpoint_service_id'?: string;
    public body?: BatchRemoveEndpointServicePermissionsRequestBody;
    public constructor(vpcEndpointServiceId?: string) { 
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
    }
    public withContentType(contentType: string): BatchRemoveEndpointServicePermissionsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withVpcEndpointServiceId(vpcEndpointServiceId: string): BatchRemoveEndpointServicePermissionsRequest {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
        return this;
    }
    public set vpcEndpointServiceId(vpcEndpointServiceId: string  | undefined) {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
    }
    public get vpcEndpointServiceId(): string | undefined {
        return this['vpc_endpoint_service_id'];
    }
    public withBody(body: BatchRemoveEndpointServicePermissionsRequestBody): BatchRemoveEndpointServicePermissionsRequest {
        this['body'] = body;
        return this;
    }
}