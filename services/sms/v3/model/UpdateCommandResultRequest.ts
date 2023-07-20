import { CommandBody } from './CommandBody';


export class UpdateCommandResultRequest {
    private 'server_id'?: string;
    public body?: CommandBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): UpdateCommandResultRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: CommandBody): UpdateCommandResultRequest {
        this['body'] = body;
        return this;
    }
}