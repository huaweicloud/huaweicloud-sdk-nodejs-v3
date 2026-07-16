

export class PoolDriver {
    public gpuVersion?: string;
    public npuVersion?: string;
    public updateStrategy?: string;
    public constructor() { 
    }
    public withGpuVersion(gpuVersion: string): PoolDriver {
        this['gpuVersion'] = gpuVersion;
        return this;
    }
    public withNpuVersion(npuVersion: string): PoolDriver {
        this['npuVersion'] = npuVersion;
        return this;
    }
    public withUpdateStrategy(updateStrategy: string): PoolDriver {
        this['updateStrategy'] = updateStrategy;
        return this;
    }
}