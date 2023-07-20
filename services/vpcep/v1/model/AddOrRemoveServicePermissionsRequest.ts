import { AddOrRemoveServicePermissionsRequestBody } from './AddOrRemoveServicePermissionsRequestBody';


export class AddOrRemoveServicePermissionsRequest {
    private 'Content-Type'?: string;
    private 'vpc_endpoint_service_id'?: string;
    public body?: AddOrRemoveServicePermissionsRequestBody;
    public constructor(vpcEndpointServiceId?: string) { 
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
    }
    public withContentType(contentType: string): AddOrRemoveServicePermissionsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withVpcEndpointServiceId(vpcEndpointServiceId: string): AddOrRemoveServicePermissionsRequest {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
        return this;
    }
    public set vpcEndpointServiceId(vpcEndpointServiceId: string  | undefined) {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
    }
    public get vpcEndpointServiceId(): string | undefined {
        return this['vpc_endpoint_service_id'];
    }
    public withBody(body: AddOrRemoveServicePermissionsRequestBody): AddOrRemoveServicePermissionsRequest {
        this['body'] = body;
        return this;
    }
}