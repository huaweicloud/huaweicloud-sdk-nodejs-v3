

export class AssociateRegistriesResponseInfo {
    private 'registry_id'?: string;
    private 'registry_name'?: string;
    private 'registry_type'?: string;
    private 'sync_status'?: string;
    private 'failed_reason'?: string;
    public constructor() { 
    }
    public withRegistryId(registryId: string): AssociateRegistriesResponseInfo {
        this['registry_id'] = registryId;
        return this;
    }
    public set registryId(registryId: string  | undefined) {
        this['registry_id'] = registryId;
    }
    public get registryId(): string | undefined {
        return this['registry_id'];
    }
    public withRegistryName(registryName: string): AssociateRegistriesResponseInfo {
        this['registry_name'] = registryName;
        return this;
    }
    public set registryName(registryName: string  | undefined) {
        this['registry_name'] = registryName;
    }
    public get registryName(): string | undefined {
        return this['registry_name'];
    }
    public withRegistryType(registryType: string): AssociateRegistriesResponseInfo {
        this['registry_type'] = registryType;
        return this;
    }
    public set registryType(registryType: string  | undefined) {
        this['registry_type'] = registryType;
    }
    public get registryType(): string | undefined {
        return this['registry_type'];
    }
    public withSyncStatus(syncStatus: string): AssociateRegistriesResponseInfo {
        this['sync_status'] = syncStatus;
        return this;
    }
    public set syncStatus(syncStatus: string  | undefined) {
        this['sync_status'] = syncStatus;
    }
    public get syncStatus(): string | undefined {
        return this['sync_status'];
    }
    public withFailedReason(failedReason: string): AssociateRegistriesResponseInfo {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string  | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason(): string | undefined {
        return this['failed_reason'];
    }
}