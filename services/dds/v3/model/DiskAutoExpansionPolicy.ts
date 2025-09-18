

export class DiskAutoExpansionPolicy {
    private 'instance_id'?: string;
    public threshold?: number;
    public step?: number;
    public size?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): DiskAutoExpansionPolicy {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
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