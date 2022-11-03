import { CreateEndpointRequestBody } from './CreateEndpointRequestBody';


export class CreateEndpointRequest {
    private 'endpoint_group_id': string | undefined;
    public body?: CreateEndpointRequestBody;
    public constructor(endpointGroupId?: any) { 
        this['endpoint_group_id'] = endpointGroupId;
    }
    public withEndpointGroupId(endpointGroupId: string): CreateEndpointRequest {
        this['endpoint_group_id'] = endpointGroupId;
        return this;
    }
    public set endpointGroupId(endpointGroupId: string | undefined) {
        this['endpoint_group_id'] = endpointGroupId;
    }
    public get endpointGroupId() {
        return this['endpoint_group_id'];
    }
    public withBody(body: CreateEndpointRequestBody): CreateEndpointRequest {
        this['body'] = body;
        return this;
    }
}