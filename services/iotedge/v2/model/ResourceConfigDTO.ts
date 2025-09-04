

export class ResourceConfigDTO {
    public cpu?: number;
    public memory?: number;
    public gpu?: number;
    public npu?: number;
    public constructor() { 
    }
    public withCpu(cpu: number): ResourceConfigDTO {
        this['cpu'] = cpu;
        return this;
    }
    public withMemory(memory: number): ResourceConfigDTO {
        this['memory'] = memory;
        return this;
    }
    public withGpu(gpu: number): ResourceConfigDTO {
        this['gpu'] = gpu;
        return this;
    }
    public withNpu(npu: number): ResourceConfigDTO {
        this['npu'] = npu;
        return this;
    }
}