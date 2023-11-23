import { AssociateConnectionQueueReq } from './AssociateConnectionQueueReq';


export class AssociateQueueToEnhancedConnectionRequest {
    private 'connection_id'?: string;
    public body?: AssociateConnectionQueueReq;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): AssociateQueueToEnhancedConnectionRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: AssociateConnectionQueueReq): AssociateQueueToEnhancedConnectionRequest {
        this['body'] = body;
        return this;
    }
}