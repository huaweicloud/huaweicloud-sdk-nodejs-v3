import { CreateRouteToEnhancedConnectionRequestBody } from './CreateRouteToEnhancedConnectionRequestBody';


export class CreateRouteToEnhancedConnectionRequest {
    private 'connection_id'?: string;
    public body?: CreateRouteToEnhancedConnectionRequestBody;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): CreateRouteToEnhancedConnectionRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: CreateRouteToEnhancedConnectionRequestBody): CreateRouteToEnhancedConnectionRequest {
        this['body'] = body;
        return this;
    }
}