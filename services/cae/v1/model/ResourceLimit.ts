

export class ResourceLimit {
    private 'cpu_limit'?: ResourceLimitCpuLimitEnum | string;
    private 'memory_limit'?: ResourceLimitMemoryLimitEnum | string;
    public constructor(cpuLimit?: string, memoryLimit?: string) { 
        this['cpu_limit'] = cpuLimit;
        this['memory_limit'] = memoryLimit;
    }
    public withCpuLimit(cpuLimit: ResourceLimitCpuLimitEnum | string): ResourceLimit {
        this['cpu_limit'] = cpuLimit;
        return this;
    }
    public set cpuLimit(cpuLimit: ResourceLimitCpuLimitEnum | string  | undefined) {
        this['cpu_limit'] = cpuLimit;
    }
    public get cpuLimit(): ResourceLimitCpuLimitEnum | string | undefined {
        return this['cpu_limit'];
    }
    public withMemoryLimit(memoryLimit: ResourceLimitMemoryLimitEnum | string): ResourceLimit {
        this['memory_limit'] = memoryLimit;
        return this;
    }
    public set memoryLimit(memoryLimit: ResourceLimitMemoryLimitEnum | string  | undefined) {
        this['memory_limit'] = memoryLimit;
    }
    public get memoryLimit(): ResourceLimitMemoryLimitEnum | string | undefined {
        return this['memory_limit'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResourceLimitCpuLimitEnum {
    E_500M = '500m',
    E_1000M = '1000m',
    E_2000M = '2000m'
}
/**
    * @export
    * @enum {string}
    */
export enum ResourceLimitMemoryLimitEnum {
    E_1GI = '1Gi',
    E_2GI = '2Gi',
    E_4GI = '4Gi'
}
