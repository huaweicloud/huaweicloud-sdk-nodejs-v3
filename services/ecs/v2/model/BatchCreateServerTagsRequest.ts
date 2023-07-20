import { BatchCreateServerTagsRequestBody } from './BatchCreateServerTagsRequestBody';


export class BatchCreateServerTagsRequest {
    private 'server_id'?: string;
    public body?: BatchCreateServerTagsRequestBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): BatchCreateServerTagsRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: BatchCreateServerTagsRequestBody): BatchCreateServerTagsRequest {
        this['body'] = body;
        return this;
    }
}