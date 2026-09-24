

export class ListInternalEndpointConnectionsRequest {
    private 'instance_id'?: string;
    public limit?: number;
    public offset?: number;
    public status?: string;
    public id?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListInternalEndpointConnectionsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLimit(limit: number): ListInternalEndpointConnectionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListInternalEndpointConnectionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withStatus(status: string): ListInternalEndpointConnectionsRequest {
        this['status'] = status;
        return this;
    }
    public withId(id: string): ListInternalEndpointConnectionsRequest {
        this['id'] = id;
        return this;
    }
}