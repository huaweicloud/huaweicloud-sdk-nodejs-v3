

export class Flavor {
    public version?: FlavorVersionEnum | number;
    private 'eip_count'?: number;
    private 'vpc_count'?: number;
    public bandwidth?: number;
    private 'log_storage'?: number;
    private 'session_concurrent'?: number;
    private 'session_create'?: number;
    private 'total_rule_count'?: number;
    private 'used_rule_count'?: number;
    private 'vpc_bandwith'?: number;
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
    public withSessionConcurrent(sessionConcurrent: number): Flavor {
        this['session_concurrent'] = sessionConcurrent;
        return this;
    }
    public set sessionConcurrent(sessionConcurrent: number  | undefined) {
        this['session_concurrent'] = sessionConcurrent;
    }
    public get sessionConcurrent(): number | undefined {
        return this['session_concurrent'];
    }
    public withSessionCreate(sessionCreate: number): Flavor {
        this['session_create'] = sessionCreate;
        return this;
    }
    public set sessionCreate(sessionCreate: number  | undefined) {
        this['session_create'] = sessionCreate;
    }
    public get sessionCreate(): number | undefined {
        return this['session_create'];
    }
    public withTotalRuleCount(totalRuleCount: number): Flavor {
        this['total_rule_count'] = totalRuleCount;
        return this;
    }
    public set totalRuleCount(totalRuleCount: number  | undefined) {
        this['total_rule_count'] = totalRuleCount;
    }
    public get totalRuleCount(): number | undefined {
        return this['total_rule_count'];
    }
    public withUsedRuleCount(usedRuleCount: number): Flavor {
        this['used_rule_count'] = usedRuleCount;
        return this;
    }
    public set usedRuleCount(usedRuleCount: number  | undefined) {
        this['used_rule_count'] = usedRuleCount;
    }
    public get usedRuleCount(): number | undefined {
        return this['used_rule_count'];
    }
    public withVpcBandwith(vpcBandwith: number): Flavor {
        this['vpc_bandwith'] = vpcBandwith;
        return this;
    }
    public set vpcBandwith(vpcBandwith: number  | undefined) {
        this['vpc_bandwith'] = vpcBandwith;
    }
    public get vpcBandwith(): number | undefined {
        return this['vpc_bandwith'];
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
