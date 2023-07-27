import { BatchCreateBaremetalServerTagsRequestBody } from './BatchCreateBaremetalServerTagsRequestBody';


export class BatchCreateBaremetalServerTagsRequest {
    private 'server_id'?: string;
    public body?: BatchCreateBaremetalServerTagsRequestBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): BatchCreateBaremetalServerTagsRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: BatchCreateBaremetalServerTagsRequestBody): BatchCreateBaremetalServerTagsRequest {
        this['body'] = body;
        return this;
    }
}