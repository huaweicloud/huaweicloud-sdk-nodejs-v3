import { CommandBody } from './CommandBody';


export class UpdateCommandResultRequest {
    private 'server_id': string | undefined;
    public body?: CommandBody;
    public constructor(serverId?: any) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): UpdateCommandResultRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withBody(body: CommandBody): UpdateCommandResultRequest {
        this['body'] = body;
        return this;
    }
}