import { ExecuteSplitSqlRequestBody } from './ExecuteSplitSqlRequestBody';


export class ExecuteSplitSqlRequest {
    private 'connection_id'?: string;
    public body?: ExecuteSplitSqlRequestBody;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): ExecuteSplitSqlRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: ExecuteSplitSqlRequestBody): ExecuteSplitSqlRequest {
        this['body'] = body;
        return this;
    }
}