import { CreateEnhancedConnectionRoutesRequestBody } from './CreateEnhancedConnectionRoutesRequestBody';


export class CreateEnhancedConnectionRoutesRequest {
    private 'connection_id'?: string;
    public body?: CreateEnhancedConnectionRoutesRequestBody;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): CreateEnhancedConnectionRoutesRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: CreateEnhancedConnectionRoutesRequestBody): CreateEnhancedConnectionRoutesRequest {
        this['body'] = body;
        return this;
    }
}