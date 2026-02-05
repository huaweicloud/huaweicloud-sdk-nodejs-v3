

export class ScalingPolicyByResource {
    private 'cpu_usage_threshold'?: number;
    private 'mem_usage_threshold'?: number;
    private 'gpu_usage_threshold'?: number;
    public constructor() { 
    }
    public withCpuUsageThreshold(cpuUsageThreshold: number): ScalingPolicyByResource {
        this['cpu_usage_threshold'] = cpuUsageThreshold;
        return this;
    }
    public set cpuUsageThreshold(cpuUsageThreshold: number  | undefined) {
        this['cpu_usage_threshold'] = cpuUsageThreshold;
    }
    public get cpuUsageThreshold(): number | undefined {
        return this['cpu_usage_threshold'];
    }
    public withMemUsageThreshold(memUsageThreshold: number): ScalingPolicyByResource {
        this['mem_usage_threshold'] = memUsageThreshold;
        return this;
    }
    public set memUsageThreshold(memUsageThreshold: number  | undefined) {
        this['mem_usage_threshold'] = memUsageThreshold;
    }
    public get memUsageThreshold(): number | undefined {
        return this['mem_usage_threshold'];
    }
    public withGpuUsageThreshold(gpuUsageThreshold: number): ScalingPolicyByResource {
        this['gpu_usage_threshold'] = gpuUsageThreshold;
        return this;
    }
    public set gpuUsageThreshold(gpuUsageThreshold: number  | undefined) {
        this['gpu_usage_threshold'] = gpuUsageThreshold;
    }
    public get gpuUsageThreshold(): number | undefined {
        return this['gpu_usage_threshold'];
    }
}