

export class ListP2cVgwConnectionsRequest {
    private 'p2c_vgw_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(p2cVgwId?: string) { 
        this['p2c_vgw_id'] = p2cVgwId;
    }
    public withP2cVgwId(p2cVgwId: string): ListP2cVgwConnectionsRequest {
        this['p2c_vgw_id'] = p2cVgwId;
        return this;
    }
    public set p2cVgwId(p2cVgwId: string  | undefined) {
        this['p2c_vgw_id'] = p2cVgwId;
    }
    public get p2cVgwId(): string | undefined {
        return this['p2c_vgw_id'];
    }
    public withLimit(limit: number): ListP2cVgwConnectionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListP2cVgwConnectionsRequest {
        this['offset'] = offset;
        return this;
    }
}