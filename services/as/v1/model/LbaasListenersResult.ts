

export class LbaasListenersResult {
    private 'listener_id'?: string;
    private 'pool_id'?: string;
    private 'protocol_port'?: number;
    public weight?: number;
    private 'protocol_version'?: LbaasListenersResultProtocolVersionEnum | string;
    public constructor() { 
    }
    public withListenerId(listenerId: string): LbaasListenersResult {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string  | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId(): string | undefined {
        return this['listener_id'];
    }
    public withPoolId(poolId: string): LbaasListenersResult {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withProtocolPort(protocolPort: number): LbaasListenersResult {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): number | undefined {
        return this['protocol_port'];
    }
    public withWeight(weight: number): LbaasListenersResult {
        this['weight'] = weight;
        return this;
    }
    public withProtocolVersion(protocolVersion: LbaasListenersResultProtocolVersionEnum | string): LbaasListenersResult {
        this['protocol_version'] = protocolVersion;
        return this;
    }
    public set protocolVersion(protocolVersion: LbaasListenersResultProtocolVersionEnum | string  | undefined) {
        this['protocol_version'] = protocolVersion;
    }
    public get protocolVersion(): LbaasListenersResultProtocolVersionEnum | string | undefined {
        return this['protocol_version'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LbaasListenersResultProtocolVersionEnum {
    IPV4 = 'IPV4',
    IPV6 = 'IPV6'
}
