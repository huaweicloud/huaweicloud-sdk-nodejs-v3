import { UpdateEndpointRequestBody } from './UpdateEndpointRequestBody';


export class UpdateEndpointRequest {
    private 'endpoint_group_id'?: string;
    private 'endpoint_id'?: string;
    public body?: UpdateEndpointRequestBody;
    public constructor(endpointGroupId?: string, endpointId?: string) { 
        this['endpoint_group_id'] = endpointGroupId;
        this['endpoint_id'] = endpointId;
    }
    public withEndpointGroupId(endpointGroupId: string): UpdateEndpointRequest {
        this['endpoint_group_id'] = endpointGroupId;
        return this;
    }
    public set endpointGroupId(endpointGroupId: string  | undefined) {
        this['endpoint_group_id'] = endpointGroupId;
    }
    public get endpointGroupId(): string | undefined {
        return this['endpoint_group_id'];
    }
    public withEndpointId(endpointId: string): UpdateEndpointRequest {
        this['endpoint_id'] = endpointId;
        return this;
    }
    public set endpointId(endpointId: string  | undefined) {
        this['endpoint_id'] = endpointId;
    }
    public get endpointId(): string | undefined {
        return this['endpoint_id'];
    }
    public withBody(body: UpdateEndpointRequestBody): UpdateEndpointRequest {
        this['body'] = body;
        return this;
    }
}