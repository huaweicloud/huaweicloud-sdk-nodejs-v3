import { ChangeServerOsWithCloudInitRequestBody } from './ChangeServerOsWithCloudInitRequestBody';


export class ChangeServerOsWithCloudInitRequest {
    private 'server_id': string | undefined;
    public body?: ChangeServerOsWithCloudInitRequestBody;
    public constructor(serverId?: any) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): ChangeServerOsWithCloudInitRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withBody(body: ChangeServerOsWithCloudInitRequestBody): ChangeServerOsWithCloudInitRequest {
        this['body'] = body;
        return this;
    }
}