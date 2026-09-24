import { UpdateInternalEndpointConnectionsRequestBody } from './UpdateInternalEndpointConnectionsRequestBody';


export class UpdateInternalEndpointConnectionsRequest {
    private 'instance_id'?: string;
    public body?: UpdateInternalEndpointConnectionsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateInternalEndpointConnectionsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateInternalEndpointConnectionsRequestBody): UpdateInternalEndpointConnectionsRequest {
        this['body'] = body;
        return this;
    }
}