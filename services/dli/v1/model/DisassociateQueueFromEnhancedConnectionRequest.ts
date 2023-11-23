import { DisassociateConnectionQueueReq } from './DisassociateConnectionQueueReq';


export class DisassociateQueueFromEnhancedConnectionRequest {
    private 'connection_id'?: string;
    public body?: DisassociateConnectionQueueReq;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): DisassociateQueueFromEnhancedConnectionRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: DisassociateConnectionQueueReq): DisassociateQueueFromEnhancedConnectionRequest {
        this['body'] = body;
        return this;
    }
}