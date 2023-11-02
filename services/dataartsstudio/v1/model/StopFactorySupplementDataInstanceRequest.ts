

export class StopFactorySupplementDataInstanceRequest {
    private 'instance_name'?: string;
    public workspace?: string;
    public constructor(instanceName?: string) { 
        this['instance_name'] = instanceName;
    }
    public withInstanceName(instanceName: string): StopFactorySupplementDataInstanceRequest {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withWorkspace(workspace: string): StopFactorySupplementDataInstanceRequest {
        this['workspace'] = workspace;
        return this;
    }
}