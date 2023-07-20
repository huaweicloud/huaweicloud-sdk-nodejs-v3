import { BatchDeleteServerTagsRequestBody } from './BatchDeleteServerTagsRequestBody';


export class BatchDeleteServerTagsRequest {
    private 'server_id'?: string;
    public body?: BatchDeleteServerTagsRequestBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): BatchDeleteServerTagsRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: BatchDeleteServerTagsRequestBody): BatchDeleteServerTagsRequest {
        this['body'] = body;
        return this;
    }
}