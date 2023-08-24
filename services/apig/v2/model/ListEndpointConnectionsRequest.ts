

export class ListEndpointConnectionsRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public id?: string;
    private 'marker_id'?: number;
    public status?: ListEndpointConnectionsRequestStatusEnum | string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListEndpointConnectionsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListEndpointConnectionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListEndpointConnectionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withId(id: string): ListEndpointConnectionsRequest {
        this['id'] = id;
        return this;
    }
    public withMarkerId(markerId: number): ListEndpointConnectionsRequest {
        this['marker_id'] = markerId;
        return this;
    }
    public set markerId(markerId: number  | undefined) {
        this['marker_id'] = markerId;
    }
    public get markerId(): number | undefined {
        return this['marker_id'];
    }
    public withStatus(status: ListEndpointConnectionsRequestStatusEnum | string): ListEndpointConnectionsRequest {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEndpointConnectionsRequestStatusEnum {
    PENDINGACCEPTANCE = 'pendingAcceptance',
    ACCEPTED = 'accepted',
    REJECTED = 'rejected',
    FAILED = 'failed'
}
