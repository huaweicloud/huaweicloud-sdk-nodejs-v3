import { UpdateEndpointServiceNameMode } from './UpdateEndpointServiceNameMode';


export class UpdateEndpointServiceNameRequest {
    private 'vpc_endpoint_service_id'?: string;
    public body?: UpdateEndpointServiceNameMode;
    public constructor(vpcEndpointServiceId?: string) { 
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
    }
    public withVpcEndpointServiceId(vpcEndpointServiceId: string): UpdateEndpointServiceNameRequest {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
        return this;
    }
    public set vpcEndpointServiceId(vpcEndpointServiceId: string  | undefined) {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
    }
    public get vpcEndpointServiceId(): string | undefined {
        return this['vpc_endpoint_service_id'];
    }
    public withBody(body: UpdateEndpointServiceNameMode): UpdateEndpointServiceNameRequest {
        this['body'] = body;
        return this;
    }
}