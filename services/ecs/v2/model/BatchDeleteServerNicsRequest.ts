import { BatchDeleteServerNicsRequestBody } from './BatchDeleteServerNicsRequestBody';


export class BatchDeleteServerNicsRequest {
    private 'server_id': string | undefined;
    public body?: BatchDeleteServerNicsRequestBody;
    public constructor(serverId?: any) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): BatchDeleteServerNicsRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withBody(body: BatchDeleteServerNicsRequestBody): BatchDeleteServerNicsRequest {
        this['body'] = body;
        return this;
    }
}