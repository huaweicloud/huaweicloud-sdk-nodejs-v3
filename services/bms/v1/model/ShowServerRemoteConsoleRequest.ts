import { ShowServerRemoteConsoleReq } from './ShowServerRemoteConsoleReq';


export class ShowServerRemoteConsoleRequest {
    private 'server_id'?: string;
    public body?: ShowServerRemoteConsoleReq;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): ShowServerRemoteConsoleRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: ShowServerRemoteConsoleReq): ShowServerRemoteConsoleRequest {
        this['body'] = body;
        return this;
    }
}