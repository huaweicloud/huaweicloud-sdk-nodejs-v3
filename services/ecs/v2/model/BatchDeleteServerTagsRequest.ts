import { BatchDeleteServerTagsRequestBody } from './BatchDeleteServerTagsRequestBody';


export class BatchDeleteServerTagsRequest {
    private 'server_id': string | undefined;
    public body?: BatchDeleteServerTagsRequestBody;
    public constructor(serverId?: any) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): BatchDeleteServerTagsRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withBody(body: BatchDeleteServerTagsRequestBody): BatchDeleteServerTagsRequest {
        this['body'] = body;
        return this;
    }
}