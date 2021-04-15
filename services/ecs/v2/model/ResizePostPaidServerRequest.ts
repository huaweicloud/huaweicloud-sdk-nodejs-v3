import { ResizePostPaidServerRequestBody } from './ResizePostPaidServerRequestBody';


export class ResizePostPaidServerRequest {
    private 'server_id': string | undefined;
    public body?: ResizePostPaidServerRequestBody;
    public constructor(serverId?: any) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): ResizePostPaidServerRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withBody(body: ResizePostPaidServerRequestBody): ResizePostPaidServerRequest {
        this['body'] = body;
        return this;
    }
}