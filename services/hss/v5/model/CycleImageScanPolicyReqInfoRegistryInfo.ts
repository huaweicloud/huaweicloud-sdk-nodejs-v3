

export class CycleImageScanPolicyReqInfoRegistryInfo {
    private 'registry_id'?: string;
    private 'registry_name'?: string;
    private 'registry_type'?: string;
    public constructor(registryId?: string, registryName?: string, registryType?: string) { 
        this['registry_id'] = registryId;
        this['registry_name'] = registryName;
        this['registry_type'] = registryType;
    }
    public withRegistryId(registryId: string): CycleImageScanPolicyReqInfoRegistryInfo {
        this['registry_id'] = registryId;
        return this;
    }
    public set registryId(registryId: string  | undefined) {
        this['registry_id'] = registryId;
    }
    public get registryId(): string | undefined {
        return this['registry_id'];
    }
    public withRegistryName(registryName: string): CycleImageScanPolicyReqInfoRegistryInfo {
        this['registry_name'] = registryName;
        return this;
    }
    public set registryName(registryName: string  | undefined) {
        this['registry_name'] = registryName;
    }
    public get registryName(): string | undefined {
        return this['registry_name'];
    }
    public withRegistryType(registryType: string): CycleImageScanPolicyReqInfoRegistryInfo {
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