

export class DeleteP2cVgwConnectionRequest {
    private 'p2c_vgw_id'?: string;
    private 'connection_id'?: string;
    public constructor(p2cVgwId?: string, connectionId?: string) { 
        this['p2c_vgw_id'] = p2cVgwId;
        this['connection_id'] = connectionId;
    }
    public withP2cVgwId(p2cVgwId: string): DeleteP2cVgwConnectionRequest {
        this['p2c_vgw_id'] = p2cVgwId;
        return this;
    }
    public set p2cVgwId(p2cVgwId: string  | undefined) {
        this['p2c_vgw_id'] = p2cVgwId;
    }
    public get p2cVgwId(): string | undefined {
        return this['p2c_vgw_id'];
    }
    public withConnectionId(connectionId: string): DeleteP2cVgwConnectionRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
}