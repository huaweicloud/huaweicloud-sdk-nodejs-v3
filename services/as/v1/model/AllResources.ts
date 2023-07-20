

export class AllResources {
    public type?: AllResourcesTypeEnum | string;
    public used?: number;
    public quota?: number;
    public max?: number;
    public min?: number;
    public constructor() { 
    }
    public withType(type: AllResourcesTypeEnum | string): AllResources {
        this['type'] = type;
        return this;
    }
    public withUsed(used: number): AllResources {
        this['used'] = used;
        return this;
    }
    public withQuota(quota: number): AllResources {
        this['quota'] = quota;
        return this;
    }
    public withMax(max: number): AllResources {
        this['max'] = max;
        return this;
    }
    public withMin(min: number): AllResources {
        this['min'] = min;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AllResourcesTypeEnum {
    SCALING_GROUP = 'scaling_group',
    SCALING_CONFIG = 'scaling_config',
    SCALING_POLICY = 'scaling_Policy',
    SCALING_INSTANCE = 'scaling_Instance',
    BANDWIDTH_SCALING_POLICY = 'bandwidth_scaling_policy'
}
