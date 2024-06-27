

export class Flavor {
    public version?: FlavorVersionEnum | number;
    private 'eip_count'?: number;
    private 'vpc_count'?: number;
    public bandwidth?: number;
    private 'log_storage'?: number;
    private 'default_bandwidth'?: number;
    private 'default_eip_count'?: number;
    private 'default_log_storage'?: number;
    private 'default_vpc_count'?: number;
    public constructor() { 
    }
    public withVersion(version: FlavorVersionEnum | number): Flavor {
        this['version'] = version;
        return this;
    }
    public withEipCount(eipCount: number): Flavor {
        this['eip_count'] = eipCount;
        return this;
    }
    public set eipCount(eipCount: number  | undefined) {
        this['eip_count'] = eipCount;
    }
    public get eipCount(): number | undefined {
        return this['eip_count'];
    }
    public withVpcCount(vpcCount: number): Flavor {
        this['vpc_count'] = vpcCount;
        return this;
    }
    public set vpcCount(vpcCount: number  | undefined) {
        this['vpc_count'] = vpcCount;
    }
    public get vpcCount(): number | undefined {
        return this['vpc_count'];
    }
    public withBandwidth(bandwidth: number): Flavor {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withLogStorage(logStorage: number): Flavor {
        this['log_storage'] = logStorage;
        return this;
    }
    public set logStorage(logStorage: number  | undefined) {
        this['log_storage'] = logStorage;
    }
    public get logStorage(): number | undefined {
        return this['log_storage'];
    }
    public withDefaultBandwidth(defaultBandwidth: number): Flavor {
        this['default_bandwidth'] = defaultBandwidth;
        return this;
    }
    public set defaultBandwidth(defaultBandwidth: number  | undefined) {
        this['default_bandwidth'] = defaultBandwidth;
    }
    public get defaultBandwidth(): number | undefined {
        return this['default_bandwidth'];
    }
    public withDefaultEipCount(defaultEipCount: number): Flavor {
        this['default_eip_count'] = defaultEipCount;
        return this;
    }
    public set defaultEipCount(defaultEipCount: number  | undefined) {
        this['default_eip_count'] = defaultEipCount;
    }
    public get defaultEipCount(): number | undefined {
        return this['default_eip_count'];
    }
    public withDefaultLogStorage(defaultLogStorage: number): Flavor {
        this['default_log_storage'] = defaultLogStorage;
        return this;
    }
    public set defaultLogStorage(defaultLogStorage: number  | undefined) {
        this['default_log_storage'] = defaultLogStorage;
    }
    public get defaultLogStorage(): number | undefined {
        return this['default_log_storage'];
    }
    public withDefaultVpcCount(defaultVpcCount: number): Flavor {
        this['default_vpc_count'] = defaultVpcCount;
        return this;
    }
    public set defaultVpcCount(defaultVpcCount: number  | undefined) {
        this['default_vpc_count'] = defaultVpcCount;
    }
    public get defaultVpcCount(): number | undefined {
        return this['default_vpc_count'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FlavorVersionEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3
}
