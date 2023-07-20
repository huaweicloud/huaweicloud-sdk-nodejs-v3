import { ResizeServerRequestBody } from './ResizeServerRequestBody';


export class ResizeServerRequest {
    private 'server_id'?: string;
    public body?: ResizeServerRequestBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): ResizeServerRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: ResizeServerRequestBody): ResizeServerRequest {
        this['body'] = body;
        return this;
    }
}