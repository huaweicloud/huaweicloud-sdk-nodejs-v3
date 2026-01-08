

export class Dependency {
    public type?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    public constructor(type?: string, instanceId?: string, instanceName?: string) { 
        this['type'] = type;
        this['instance_id'] = instanceId;
        this['instance_name'] = instanceName;
    }
    public withType(type: string): Dependency {
        this['type'] = type;
        return this;
    }
    public withInstanceId(instanceId: string): Dependency {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): Dependency {
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