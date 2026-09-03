import { StopBinlogTaskRequestBody } from './StopBinlogTaskRequestBody';


export class StopBinlogTaskRequest {
    private 'connection_id'?: string;
    public body?: StopBinlogTaskRequestBody;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): StopBinlogTaskRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: StopBinlogTaskRequestBody): StopBinlogTaskRequest {
        this['body'] = body;
        return this;
    }
}