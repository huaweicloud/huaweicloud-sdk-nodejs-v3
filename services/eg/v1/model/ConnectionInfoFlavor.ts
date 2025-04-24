

export class ConnectionInfoFlavor {
    public name?: string;
    private 'concurrency_type'?: ConnectionInfoFlavorConcurrencyTypeEnum | string;
    public concurrency?: number;
    private 'bandwidth_type'?: ConnectionInfoFlavorBandwidthTypeEnum | string;
    public constructor() { 
    }
    public withName(name: string): ConnectionInfoFlavor {
        this['name'] = name;
        return this;
    }
    public withConcurrencyType(concurrencyType: ConnectionInfoFlavorConcurrencyTypeEnum | string): ConnectionInfoFlavor {
        this['concurrency_type'] = concurrencyType;
        return this;
    }
    public set concurrencyType(concurrencyType: ConnectionInfoFlavorConcurrencyTypeEnum | string  | undefined) {
        this['concurrency_type'] = concurrencyType;
    }
    public get concurrencyType(): ConnectionInfoFlavorConcurrencyTypeEnum | string | undefined {
        return this['concurrency_type'];
    }
    public withConcurrency(concurrency: number): ConnectionInfoFlavor {
        this['concurrency'] = concurrency;
        return this;
    }
    public withBandwidthType(bandwidthType: ConnectionInfoFlavorBandwidthTypeEnum | string): ConnectionInfoFlavor {
        this['bandwidth_type'] = bandwidthType;
        return this;
    }
    public set bandwidthType(bandwidthType: ConnectionInfoFlavorBandwidthTypeEnum | string  | undefined) {
        this['bandwidth_type'] = bandwidthType;
    }
    public get bandwidthType(): ConnectionInfoFlavorBandwidthTypeEnum | string | undefined {
        return this['bandwidth_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConnectionInfoFlavorConcurrencyTypeEnum {
    SHARED = 'shared',
    EXCLUSIVE = 'exclusive'
}
/**
    * @export
    * @enum {string}
    */
export enum ConnectionInfoFlavorBandwidthTypeEnum {
    SHARED = 'shared',
    EXCLUSIVE = 'exclusive'
}
