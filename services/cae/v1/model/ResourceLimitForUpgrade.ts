

export class ResourceLimitForUpgrade {
    private 'cpu_limit'?: ResourceLimitForUpgradeCpuLimitEnum | string;
    private 'memory_limit'?: ResourceLimitForUpgradeMemoryLimitEnum | string;
    public constructor() { 
    }
    public withCpuLimit(cpuLimit: ResourceLimitForUpgradeCpuLimitEnum | string): ResourceLimitForUpgrade {
        this['cpu_limit'] = cpuLimit;
        return this;
    }
    public set cpuLimit(cpuLimit: ResourceLimitForUpgradeCpuLimitEnum | string  | undefined) {
        this['cpu_limit'] = cpuLimit;
    }
    public get cpuLimit(): ResourceLimitForUpgradeCpuLimitEnum | string | undefined {
        return this['cpu_limit'];
    }
    public withMemoryLimit(memoryLimit: ResourceLimitForUpgradeMemoryLimitEnum | string): ResourceLimitForUpgrade {
        this['memory_limit'] = memoryLimit;
        return this;
    }
    public set memoryLimit(memoryLimit: ResourceLimitForUpgradeMemoryLimitEnum | string  | undefined) {
        this['memory_limit'] = memoryLimit;
    }
    public get memoryLimit(): ResourceLimitForUpgradeMemoryLimitEnum | string | undefined {
        return this['memory_limit'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResourceLimitForUpgradeCpuLimitEnum {
    E_500M = '500m',
    E_1000M = '1000m',
    E_2000M = '2000m'
}
/**
    * @export
    * @enum {string}
    */
export enum ResourceLimitForUpgradeMemoryLimitEnum {
    E_1GI = '1Gi',
    E_2GI = '2Gi',
    E_4GI = '4Gi'
}
