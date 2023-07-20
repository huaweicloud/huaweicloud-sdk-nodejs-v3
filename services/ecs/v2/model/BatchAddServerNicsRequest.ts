import { BatchAddServerNicsRequestBody } from './BatchAddServerNicsRequestBody';


export class BatchAddServerNicsRequest {
    private 'server_id'?: string;
    public body?: BatchAddServerNicsRequestBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): BatchAddServerNicsRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: BatchAddServerNicsRequestBody): BatchAddServerNicsRequest {
        this['body'] = body;
        return this;
    }
}