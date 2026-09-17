import { ModifyConnectionRequestBody } from './ModifyConnectionRequestBody';


export class ModifyConnectionRequest {
    private 'connection_id'?: string;
    public body?: ModifyConnectionRequestBody;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): ModifyConnectionRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: ModifyConnectionRequestBody): ModifyConnectionRequest {
        this['body'] = body;
        return this;
    }
}