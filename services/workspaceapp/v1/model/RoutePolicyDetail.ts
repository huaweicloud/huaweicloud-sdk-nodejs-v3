

export class RoutePolicyDetail {
    private 'max_session'?: number;
    private 'cpu_threshold'?: number;
    private 'gpu_threshold'?: number;
    private 'mem_threshold'?: number;
    public constructor() { 
    }
    public withMaxSession(maxSession: number): RoutePolicyDetail {
        this['max_session'] = maxSession;
        return this;
    }
    public set maxSession(maxSession: number  | undefined) {
        this['max_session'] = maxSession;
    }
    public get maxSession(): number | undefined {
        return this['max_session'];
    }
    public withCpuThreshold(cpuThreshold: number): RoutePolicyDetail {
        this['cpu_threshold'] = cpuThreshold;
        return this;
    }
    public set cpuThreshold(cpuThreshold: number  | undefined) {
        this['cpu_threshold'] = cpuThreshold;
    }
    public get cpuThreshold(): number | undefined {
        return this['cpu_threshold'];
    }
    public withGpuThreshold(gpuThreshold: number): RoutePolicyDetail {
        this['gpu_threshold'] = gpuThreshold;
        return this;
    }
    public set gpuThreshold(gpuThreshold: number  | undefined) {
        this['gpu_threshold'] = gpuThreshold;
    }
    public get gpuThreshold(): number | undefined {
        return this['gpu_threshold'];
    }
    public withMemThreshold(memThreshold: number): RoutePolicyDetail {
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