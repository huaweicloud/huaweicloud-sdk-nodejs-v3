import { AssociateConnectionQueueReq } from './AssociateConnectionQueueReq';


export class AssociateConnectionQueueRequest {
    private 'connection_id'?: string;
    public body?: AssociateConnectionQueueReq;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): AssociateConnectionQueueRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: AssociateConnectionQueueReq): AssociateConnectionQueueRequest {
        this['body'] = body;
        return this;
    }
}