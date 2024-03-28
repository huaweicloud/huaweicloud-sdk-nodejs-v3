import { AssociateQueueToEnhancedConnectionRequestBody } from './AssociateQueueToEnhancedConnectionRequestBody';


export class AssociateQueueToEnhancedConnectionRequest {
    private 'connection_id'?: string;
    public body?: AssociateQueueToEnhancedConnectionRequestBody;
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
    public withBody(body: AssociateQueueToEnhancedConnectionRequestBody): AssociateQueueToEnhancedConnectionRequest {
        this['body'] = body;
        return this;
    }
}