

export class CustomResourceSpec {
    public gpu?: number;
    public memory?: number;
    public cpu?: number;
    public ascend?: number;
    public arch?: string;
    public constructor() { 
    }
    public withGpu(gpu: number): CustomResourceSpec {
        this['gpu'] = gpu;
        return this;
    }
    public withMemory(memory: number): CustomResourceSpec {
        this['memory'] = memory;
        return this;
    }
    public withCpu(cpu: number): CustomResourceSpec {
        this['cpu'] = cpu;
        return this;
    }
    public withAscend(ascend: number): CustomResourceSpec {
        this['ascend'] = ascend;
        return this;
    }
    public withArch(arch: string): CustomResourceSpec {
        this['arch'] = arch;
        return this;
    }
}