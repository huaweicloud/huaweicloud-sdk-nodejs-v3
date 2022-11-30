import { MigrateServerRequestBody } from './MigrateServerRequestBody';


export class MigrateServerRequest {
    private 'server_id': string | undefined;
    public body?: MigrateServerRequestBody;
    public constructor(serverId?: any) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): MigrateServerRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withBody(body: MigrateServerRequestBody): MigrateServerRequest {
        this['body'] = body;
        return this;
    }
}