import { UnbindVportRequestBody } from './UnbindVportRequestBody';


export class UnbindVportRequest {
    private 'connection_id'?: string;
    public body?: UnbindVportRequestBody;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): UnbindVportRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: UnbindVportRequestBody): UnbindVportRequest {
        this['body'] = body;
        return this;
    }
}