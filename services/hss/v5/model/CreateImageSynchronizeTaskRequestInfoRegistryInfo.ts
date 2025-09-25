

export class CreateImageSynchronizeTaskRequestInfoRegistryInfo {
    private 'registry_id'?: string;
    private 'registry_type'?: string;
    public constructor() { 
    }
    public withRegistryId(registryId: string): CreateImageSynchronizeTaskRequestInfoRegistryInfo {
        this['registry_id'] = registryId;
        return this;
    }
    public set registryId(registryId: string  | undefined) {
        this['registry_id'] = registryId;
    }
    public get registryId(): string | undefined {
        return this['registry_id'];
    }
    public withRegistryType(registryType: string): CreateImageSynchronizeTaskRequestInfoRegistryInfo {
        this['registry_type'] = registryType;
        return this;
    }
    public set registryType(registryType: string  | undefined) {
        this['registry_type'] = registryType;
    }
    public get registryType(): string | undefined {
        return this['registry_type'];
    }
}