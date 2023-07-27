

export class Entitie {
    private 'server_id'?: string;
    private 'nic_id'?: string;
    public constructor() { 
    }
    public withServerId(serverId: string): Entitie {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withNicId(nicId: string): Entitie {
        this['nic_id'] = nicId;
        return this;
    }
    public set nicId(nicId: string  | undefined) {
        this['nic_id'] = nicId;
    }
    public get nicId(): string | undefined {
        return this['nic_id'];
    }
}