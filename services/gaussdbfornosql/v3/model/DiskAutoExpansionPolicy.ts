

export class DiskAutoExpansionPolicy {
    public threshold?: number;
    public step?: number;
    public size?: number;
    public constructor() { 
    }
    public withThreshold(threshold: number): DiskAutoExpansionPolicy {
        this['threshold'] = threshold;
        return this;
    }
    public withStep(step: number): DiskAutoExpansionPolicy {
        this['step'] = step;
        return this;
    }
    public withSize(size: number): DiskAutoExpansionPolicy {
        this['size'] = size;
        return this;
    }
}