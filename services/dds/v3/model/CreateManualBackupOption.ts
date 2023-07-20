

export class CreateManualBackupOption {
    private 'instance_id'?: string;
    public name?: string;
    public description?: string;
    public constructor(instanceId?: string, name?: string) { 
        this['instance_id'] = instanceId;
        this['name'] = name;
    }
    public withInstanceId(instanceId: string): CreateManualBackupOption {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withName(name: string): CreateManualBackupOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateManualBackupOption {
        this['description'] = description;
        return this;
    }
}