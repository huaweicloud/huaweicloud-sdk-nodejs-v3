import { ResizePostPaidServerRequestBody } from './ResizePostPaidServerRequestBody';


export class ResizePostPaidServerRequest {
    private 'server_id'?: string;
    public body?: ResizePostPaidServerRequestBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): ResizePostPaidServerRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: ResizePostPaidServerRequestBody): ResizePostPaidServerRequest {
        this['body'] = body;
        return this;
    }
}