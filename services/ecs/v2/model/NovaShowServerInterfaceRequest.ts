

export class NovaShowServerInterfaceRequest {
    private 'port_id'?: string;
    private 'server_id'?: string;
    public constructor(portId?: string, serverId?: string) { 
        this['port_id'] = portId;
        this['server_id'] = serverId;
    }
    public withPortId(portId: string): NovaShowServerInterfaceRequest {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withServerId(serverId: string): NovaShowServerInterfaceRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
}