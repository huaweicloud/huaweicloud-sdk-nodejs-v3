

export class Flavor {
    public version?: FlavorVersionEnum;
    private 'eip_count'?: number | undefined;
    private 'vpc_count'?: number | undefined;
    public bandwidth?: number;
    private 'log_storage'?: number | undefined;
    public constructor() { 
    }
    public withVersion(version: FlavorVersionEnum): Flavor {
        this['version'] = version;
        return this;
    }
    public withEipCount(eipCount: number): Flavor {
        this['eip_count'] = eipCount;
        return this;
    }
    public set eipCount(eipCount: number | undefined) {
        this['eip_count'] = eipCount;
    }
    public get eipCount() {
        return this['eip_count'];
    }
    public withVpcCount(vpcCount: number): Flavor {
        this['vpc_count'] = vpcCount;
        return this;
    }
    public set vpcCount(vpcCount: number | undefined) {
        this['vpc_count'] = vpcCount;
    }
    public get vpcCount() {
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
    public set logStorage(logStorage: number | undefined) {
        this['log_storage'] = logStorage;
    }
    public get logStorage() {
        return this['log_storage'];
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
