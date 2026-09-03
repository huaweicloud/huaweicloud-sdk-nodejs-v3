import { CreateBinlogTaskRequestBody } from './CreateBinlogTaskRequestBody';


export class CreateBinlogTaskRequest {
    private 'connection_id'?: string;
    public body?: CreateBinlogTaskRequestBody;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): CreateBinlogTaskRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: CreateBinlogTaskRequestBody): CreateBinlogTaskRequest {
        this['body'] = body;
        return this;
    }
}