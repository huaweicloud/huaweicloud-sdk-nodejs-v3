import { BatchRemovePermissionRequest } from './BatchRemovePermissionRequest';


export class BatchRemoveEndpointServicePermissionsRequest {
    private 'Content-Type'?: string | undefined;
    private 'vpc_endpoint_service_id': string | undefined;
    public body?: BatchRemovePermissionRequest;
    public constructor(vpcEndpointServiceId?: any) { 
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
    }
    public withContentType(contentType: string): BatchRemoveEndpointServicePermissionsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withVpcEndpointServiceId(vpcEndpointServiceId: string): BatchRemoveEndpointServicePermissionsRequest {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
        return this;
    }
    public set vpcEndpointServiceId(vpcEndpointServiceId: string | undefined) {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
    }
    public get vpcEndpointServiceId() {
        return this['vpc_endpoint_service_id'];
    }
    public withBody(body: BatchRemovePermissionRequest): BatchRemoveEndpointServicePermissionsRequest {
        this['body'] = body;
        return this;
    }
}