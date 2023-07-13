

export class Instances {
    private 'instance_id'?: string | undefined;
    private 'instance_name'?: string | undefined;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): Instances {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): Instances {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName() {
        return this['instance_name'];
    }
}