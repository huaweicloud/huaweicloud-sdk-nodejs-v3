import { UpdateImageServerReq } from './UpdateImageServerReq';


export class UpdateImageServerRequest {
    private 'server_id'?: string;
    public body?: UpdateImageServerReq;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): UpdateImageServerRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: UpdateImageServerReq): UpdateImageServerRequest {
        this['body'] = body;
        return this;
    }
}