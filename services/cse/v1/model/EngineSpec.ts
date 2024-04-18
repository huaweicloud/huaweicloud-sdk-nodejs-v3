

export class EngineSpec {
    public availableCpuMemory?: string;
    public linear?: string;
    public availablePrefix?: string;
    public constructor() { 
    }
    public withAvailableCpuMemory(availableCpuMemory: string): EngineSpec {
        this['availableCpuMemory'] = availableCpuMemory;
        return this;
    }
    public withLinear(linear: string): EngineSpec {
        this['linear'] = linear;
        return this;
    }
    public withAvailablePrefix(availablePrefix: string): EngineSpec {
        this['availablePrefix'] = availablePrefix;
        return this;
    }
}