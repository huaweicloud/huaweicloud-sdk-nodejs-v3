import { ShowExecuteResultWithoutKeyNoRetryRequestBody } from './ShowExecuteResultWithoutKeyNoRetryRequestBody';


export class ShowExecuteResultWithoutKeyNoRetryRequest {
    private 'connection_id'?: string;
    public body?: ShowExecuteResultWithoutKeyNoRetryRequestBody;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): ShowExecuteResultWithoutKeyNoRetryRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: ShowExecuteResultWithoutKeyNoRetryRequestBody): ShowExecuteResultWithoutKeyNoRetryRequest {
        this['body'] = body;
        return this;
    }
}