import { DisassociateQueueFromEnhancedConnectionRequestBody } from './DisassociateQueueFromEnhancedConnectionRequestBody';


export class DisassociateQueueFromEnhancedConnectionRequest {
    private 'connection_id'?: string;
    public body?: DisassociateQueueFromEnhancedConnectionRequestBody;
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
    public withBody(body: DisassociateQueueFromEnhancedConnectionRequestBody): DisassociateQueueFromEnhancedConnectionRequest {
        this['body'] = body;
        return this;
    }
}