

export class DeleteInstanceRegistryRequest {
    private 'instance_id'?: string;
    private 'registry_id'?: number;
    public constructor(instanceId?: string, registryId?: number) { 
        this['instance_id'] = instanceId;
        this['registry_id'] = registryId;
    }
    public withInstanceId(instanceId: string): DeleteInstanceRegistryRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withRegistryId(registryId: number): DeleteInstanceRegistryRequest {
        this['registry_id'] = registryId;
        return this;
    }
    public set registryId(registryId: number  | undefined) {
        this['registry_id'] = registryId;
    }
    public get registryId(): number | undefined {
        return this['registry_id'];
    }
}