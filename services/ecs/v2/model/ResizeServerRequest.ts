import { ResizeServerRequestBody } from './ResizeServerRequestBody';


export class ResizeServerRequest {
    private 'server_id': string | undefined;
    public body?: ResizeServerRequestBody;
    public constructor(serverId?: any) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): ResizeServerRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withBody(body: ResizeServerRequestBody): ResizeServerRequest {
        this['body'] = body;
        return this;
    }
}