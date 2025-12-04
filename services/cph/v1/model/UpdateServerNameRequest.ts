import { UpdateServerNameRequestBody } from './UpdateServerNameRequestBody';


export class UpdateServerNameRequest {
    private 'server_id'?: string;
    public body?: UpdateServerNameRequestBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): UpdateServerNameRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: UpdateServerNameRequestBody): UpdateServerNameRequest {
        this['body'] = body;
        return this;
    }
}