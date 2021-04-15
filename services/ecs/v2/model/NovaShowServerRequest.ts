

export class NovaShowServerRequest {
    private 'server_id': string | undefined;
    private 'OpenStack-API-Version'?: string | undefined;
    public constructor(serverId?: any) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): NovaShowServerRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withOpenStackAPIVersion(openStackAPIVersion: string): NovaShowServerRequest {
        this['OpenStack-API-Version'] = openStackAPIVersion;
        return this;
    }
    public set openStackAPIVersion(openStackAPIVersion: string | undefined) {
        this['OpenStack-API-Version'] = openStackAPIVersion;
    }
    public get openStackAPIVersion() {
        return this['OpenStack-API-Version'];
    }
}