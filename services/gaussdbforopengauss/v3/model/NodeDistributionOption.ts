

export class NodeDistributionOption {
    public num?: number;
    private 'availability_zone'?: string;
    private 'flavor_ref'?: string;
    private 'configuration_id'?: string;
    public constructor(num?: number, availabilityZone?: string, flavorRef?: string, configurationId?: string) { 
        this['num'] = num;
        this['availability_zone'] = availabilityZone;
        this['flavor_ref'] = flavorRef;
        this['configuration_id'] = configurationId;
    }
    public withNum(num: number): NodeDistributionOption {
        this['num'] = num;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): NodeDistributionOption {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withFlavorRef(flavorRef: string): NodeDistributionOption {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withConfigurationId(configurationId: string): NodeDistributionOption {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
}