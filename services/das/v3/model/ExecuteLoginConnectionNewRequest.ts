import { ExecuteLoginConnectionNewRequestBody } from './ExecuteLoginConnectionNewRequestBody';


export class ExecuteLoginConnectionNewRequest {
    private 'connection_id'?: string;
    public body?: ExecuteLoginConnectionNewRequestBody;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): ExecuteLoginConnectionNewRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: ExecuteLoginConnectionNewRequestBody): ExecuteLoginConnectionNewRequest {
        this['body'] = body;
        return this;
    }
}