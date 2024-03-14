import { UpdateEndpointConnectionsDescRequestBody } from './UpdateEndpointConnectionsDescRequestBody';


export class UpdateEndpointConnectionsDescRequest {
    private 'vpc_endpoint_service_id'?: string;
    public body?: UpdateEndpointConnectionsDescRequestBody;
    public constructor(vpcEndpointServiceId?: string) { 
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
    }
    public withVpcEndpointServiceId(vpcEndpointServiceId: string): UpdateEndpointConnectionsDescRequest {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
        return this;
    }
    public set vpcEndpointServiceId(vpcEndpointServiceId: string  | undefined) {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
    }
    public get vpcEndpointServiceId(): string | undefined {
        return this['vpc_endpoint_service_id'];
    }
    public withBody(body: UpdateEndpointConnectionsDescRequestBody): UpdateEndpointConnectionsDescRequest {
        this['body'] = body;
        return this;
    }
}