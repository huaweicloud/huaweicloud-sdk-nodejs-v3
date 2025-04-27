import { UpdateEndpointRequestBody } from './UpdateEndpointRequestBody';


export class UpdateEndpointRequest {
    private 'endpoint_id'?: string;
    public body?: UpdateEndpointRequestBody;
    public constructor(endpointId?: string) { 
        this['endpoint_id'] = endpointId;
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