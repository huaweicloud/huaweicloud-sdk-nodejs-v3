import { ChangeServerImageReq } from './ChangeServerImageReq';


export class ChangeServerImageRequest {
    private 'server_id'?: string;
    public body?: ChangeServerImageReq;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): ChangeServerImageRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: ChangeServerImageReq): ChangeServerImageRequest {
        this['body'] = body;
        return this;
    }
}