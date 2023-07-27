import { OsReinstallBody } from './OsReinstallBody';


export class ReinstallBaremetalServerOsRequest {
    private 'server_id'?: string;
    public body?: OsReinstallBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): ReinstallBaremetalServerOsRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: OsReinstallBody): ReinstallBaremetalServerOsRequest {
        this['body'] = body;
        return this;
    }
}