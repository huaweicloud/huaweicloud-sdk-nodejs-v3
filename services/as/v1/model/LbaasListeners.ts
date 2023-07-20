

export class LbaasListeners {
    private 'pool_id'?: string;
    private 'protocol_port'?: number;
    public weight?: number;
    public constructor(poolId?: string, protocolPort?: number, weight?: number) { 
        this['pool_id'] = poolId;
        this['protocol_port'] = protocolPort;
        this['weight'] = weight;
    }
    public withPoolId(poolId: string): LbaasListeners {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withProtocolPort(protocolPort: number): LbaasListeners {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): number | undefined {
        return this['protocol_port'];
    }
    public withWeight(weight: number): LbaasListeners {
        this['weight'] = weight;
        return this;
    }
}