import { BatchAddPermissionRequest } from './BatchAddPermissionRequest';


export class BatchAddEndpointServicePermissionsRequest {
    private 'Content-Type': string | undefined;
    private 'vpc_endpoint_service_id': string | undefined;
    public body?: BatchAddPermissionRequest;
    public constructor(contentType?: any, vpcEndpointServiceId?: any) { 
        this['Content-Type'] = contentType;
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
    }
    public withContentType(contentType: string): BatchAddEndpointServicePermissionsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withVpcEndpointServiceId(vpcEndpointServiceId: string): BatchAddEndpointServicePermissionsRequest {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
        return this;
    }
    public set vpcEndpointServiceId(vpcEndpointServiceId: string | undefined) {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
    }
    public get vpcEndpointServiceId() {
        return this['vpc_endpoint_service_id'];
    }
    public withBody(body: BatchAddPermissionRequest): BatchAddEndpointServicePermissionsRequest {
        this['body'] = body;
        return this;
    }
}