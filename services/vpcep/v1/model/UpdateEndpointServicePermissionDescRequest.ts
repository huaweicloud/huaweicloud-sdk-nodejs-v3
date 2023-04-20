import { UpdatePermissionDescRequest } from './UpdatePermissionDescRequest';


export class UpdateEndpointServicePermissionDescRequest {
    private 'Content-Type'?: string | undefined;
    private 'vpc_endpoint_service_id': string | undefined;
    private 'permission_id': string | undefined;
    public body?: UpdatePermissionDescRequest;
    public constructor(vpcEndpointServiceId?: any, permissionId?: any) { 
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
        this['permission_id'] = permissionId;
    }
    public withContentType(contentType: string): UpdateEndpointServicePermissionDescRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withVpcEndpointServiceId(vpcEndpointServiceId: string): UpdateEndpointServicePermissionDescRequest {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
        return this;
    }
    public set vpcEndpointServiceId(vpcEndpointServiceId: string | undefined) {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
    }
    public get vpcEndpointServiceId() {
        return this['vpc_endpoint_service_id'];
    }
    public withPermissionId(permissionId: string): UpdateEndpointServicePermissionDescRequest {
        this['permission_id'] = permissionId;
        return this;
    }
    public set permissionId(permissionId: string | undefined) {
        this['permission_id'] = permissionId;
    }
    public get permissionId() {
        return this['permission_id'];
    }
    public withBody(body: UpdatePermissionDescRequest): UpdateEndpointServicePermissionDescRequest {
        this['body'] = body;
        return this;
    }
}