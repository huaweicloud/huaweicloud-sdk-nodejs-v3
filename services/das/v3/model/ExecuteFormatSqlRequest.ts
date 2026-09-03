import { ExecuteFormatSqlRequestBody } from './ExecuteFormatSqlRequestBody';


export class ExecuteFormatSqlRequest {
    private 'connection_id'?: string;
    public body?: ExecuteFormatSqlRequestBody;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): ExecuteFormatSqlRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: ExecuteFormatSqlRequestBody): ExecuteFormatSqlRequest {
        this['body'] = body;
        return this;
    }
}