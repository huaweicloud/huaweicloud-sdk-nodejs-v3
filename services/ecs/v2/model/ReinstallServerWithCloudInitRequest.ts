import { ReinstallServerWithCloudInitRequestBody } from './ReinstallServerWithCloudInitRequestBody';


export class ReinstallServerWithCloudInitRequest {
    private 'server_id': string | undefined;
    public body?: ReinstallServerWithCloudInitRequestBody;
    public constructor(serverId?: any) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): ReinstallServerWithCloudInitRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withBody(body: ReinstallServerWithCloudInitRequestBody): ReinstallServerWithCloudInitRequest {
        this['body'] = body;
        return this;
    }
}