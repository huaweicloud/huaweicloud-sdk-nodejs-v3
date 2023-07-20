import { CreateEndpointRequestBody } from './CreateEndpointRequestBody';


export class CreateEndpointRequest {
    private 'endpoint_group_id'?: string;
    public body?: CreateEndpointRequestBody;
    public constructor(endpointGroupId?: string) { 
        this['endpoint_group_id'] = endpointGroupId;
    }
    public withEndpointGroupId(endpointGroupId: string): CreateEndpointRequest {
        this['endpoint_group_id'] = endpointGroupId;
        return this;
    }
    public set endpointGroupId(endpointGroupId: string  | undefined) {
        this['endpoint_group_id'] = endpointGroupId;
    }
    public get endpointGroupId(): string | undefined {
        return this['endpoint_group_id'];
    }
    public withBody(body: CreateEndpointRequestBody): CreateEndpointRequest {
        this['body'] = body;
        return this;
    }
}