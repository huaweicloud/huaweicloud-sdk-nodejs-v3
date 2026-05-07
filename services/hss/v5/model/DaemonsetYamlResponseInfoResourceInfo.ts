

export class DaemonsetYamlResponseInfoResourceInfo {
    public mode?: string;
    private 'cpu_limit'?: string;
    private 'mem_limit'?: string;
    public constructor() { 
    }
    public withMode(mode: string): DaemonsetYamlResponseInfoResourceInfo {
        this['mode'] = mode;
        return this;
    }
    public withCpuLimit(cpuLimit: string): DaemonsetYamlResponseInfoResourceInfo {
        this['cpu_limit'] = cpuLimit;
        return this;
    }
    public set cpuLimit(cpuLimit: string  | undefined) {
        this['cpu_limit'] = cpuLimit;
    }
    public get cpuLimit(): string | undefined {
        return this['cpu_limit'];
    }
    public withMemLimit(memLimit: string): DaemonsetYamlResponseInfoResourceInfo {
        this['mem_limit'] = memLimit;
        return this;
    }
    public set memLimit(memLimit: string  | undefined) {
        this['mem_limit'] = memLimit;
    }
    public get memLimit(): string | undefined {
        return this['mem_limit'];
    }
}