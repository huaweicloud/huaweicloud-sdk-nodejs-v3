

export class InstancesWeight {
    private 'instance_id'?: string;
    public weight?: number;
    public constructor(instanceId?: string, weight?: number) { 
        this['instance_id'] = instanceId;
        this['weight'] = weight;
    }
    public withInstanceId(instanceId: string): InstancesWeight {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withWeight(weight: number): InstancesWeight {
        this['weight'] = weight;
        return this;
    }
}