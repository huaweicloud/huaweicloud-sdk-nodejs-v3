import { UpdateServerRequestBody } from './UpdateServerRequestBody';


export class UpdateServerRequest {
    private 'server_id': string | undefined;
    public body?: UpdateServerRequestBody;
    public constructor(serverId?: any) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): UpdateServerRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withBody(body: UpdateServerRequestBody): UpdateServerRequest {
        this['body'] = body;
        return this;
    }
}