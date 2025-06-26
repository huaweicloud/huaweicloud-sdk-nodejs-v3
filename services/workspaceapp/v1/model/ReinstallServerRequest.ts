import { ReinstallServerReq } from './ReinstallServerReq';


export class ReinstallServerRequest {
    private 'server_id'?: string;
    public body?: ReinstallServerReq;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): ReinstallServerRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: ReinstallServerReq): ReinstallServerRequest {
        this['body'] = body;
        return this;
    }
}