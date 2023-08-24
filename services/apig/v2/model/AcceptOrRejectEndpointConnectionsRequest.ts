import { ConnectionActionReq } from './ConnectionActionReq';


export class AcceptOrRejectEndpointConnectionsRequest {
    private 'instance_id'?: string;
    public body?: ConnectionActionReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): AcceptOrRejectEndpointConnectionsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ConnectionActionReq): AcceptOrRejectEndpointConnectionsRequest {
        this['body'] = body;
        return this;
    }
}