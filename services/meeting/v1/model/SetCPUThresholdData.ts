

export class SetCPUThresholdData {
    public cpu?: number;
    public constructor() { 
    }
    public withCpu(cpu: number): SetCPUThresholdData {
        this['cpu'] = cpu;
        return this;
    }
}