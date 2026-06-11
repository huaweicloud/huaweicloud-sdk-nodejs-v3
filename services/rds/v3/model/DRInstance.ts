

export class DRInstance {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    public constructor(instanceId?: string, instanceName?: string) { 
        this['instance_id'] = instanceId;
        this['instance_name'] = instanceName;
    }
    public withInstanceId(instanceId: string): DRInstance {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): DRInstance {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
}