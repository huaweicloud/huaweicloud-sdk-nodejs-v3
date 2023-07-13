

export class CPUThresholdData {
    public cpu?: number;
    public cpuDefault?: number;
    public constructor() { 
    }
    public withCpu(cpu: number): CPUThresholdData {
        this['cpu'] = cpu;
        return this;
    }
    public withCpuDefault(cpuDefault: number): CPUThresholdData {
        this['cpuDefault'] = cpuDefault;
        return this;
    }
}