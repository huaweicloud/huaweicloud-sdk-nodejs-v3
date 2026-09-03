import { CancelConnectionProcessRequestBody } from './CancelConnectionProcessRequestBody';


export class CancelConnectionProcessRequest {
    private 'connection_id'?: string;
    public body?: CancelConnectionProcessRequestBody;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): CancelConnectionProcessRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: CancelConnectionProcessRequestBody): CancelConnectionProcessRequest {
        this['body'] = body;
        return this;
    }
}