

export class AgentEditRequest {
    private 'cpu_threshold'?: number;
    private 'mem_threshold'?: number;
    public constructor(cpuThreshold?: number, memThreshold?: number) { 
        this['cpu_threshold'] = cpuThreshold;
        this['mem_threshold'] = memThreshold;
    }
    public withCpuThreshold(cpuThreshold: number): AgentEditRequest {
        this['cpu_threshold'] = cpuThreshold;
        return this;
    }
    public set cpuThreshold(cpuThreshold: number  | undefined) {
        this['cpu_threshold'] = cpuThreshold;
    }
    public get cpuThreshold(): number | undefined {
        return this['cpu_threshold'];
    }
    public withMemThreshold(memThreshold: number): AgentEditRequest {
        this['mem_threshold'] = memThreshold;
        return this;
    }
    public set memThreshold(memThreshold: number  | undefined) {
        this['mem_threshold'] = memThreshold;
    }
    public get memThreshold(): number | undefined {
        return this['mem_threshold'];
    }
}