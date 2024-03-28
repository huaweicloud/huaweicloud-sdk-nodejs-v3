import { UpdateEnhancedConnectionRequestBody } from './UpdateEnhancedConnectionRequestBody';


export class UpdateEnhancedConnectionRequest {
    private 'connection_id'?: string;
    public body?: UpdateEnhancedConnectionRequestBody;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): UpdateEnhancedConnectionRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: UpdateEnhancedConnectionRequestBody): UpdateEnhancedConnectionRequest {
        this['body'] = body;
        return this;
    }
}