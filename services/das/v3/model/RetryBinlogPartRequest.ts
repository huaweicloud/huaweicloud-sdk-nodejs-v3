import { RetryBinlogPartRequestBody } from './RetryBinlogPartRequestBody';


export class RetryBinlogPartRequest {
    private 'connection_id'?: string;
    public body?: RetryBinlogPartRequestBody;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): RetryBinlogPartRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: RetryBinlogPartRequestBody): RetryBinlogPartRequest {
        this['body'] = body;
        return this;
    }
}