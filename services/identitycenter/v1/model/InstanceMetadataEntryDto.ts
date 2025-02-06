

export class InstanceMetadataEntryDto {
    private 'identity_store_id'?: string;
    private 'instance_id'?: string;
    public alias?: string;
    private 'instance_urn'?: string;
    public constructor(identityStoreId?: string, instanceId?: string) { 
        this['identity_store_id'] = identityStoreId;
        this['instance_id'] = instanceId;
    }
    public withIdentityStoreId(identityStoreId: string): InstanceMetadataEntryDto {
        this['identity_store_id'] = identityStoreId;
        return this;
    }
    public set identityStoreId(identityStoreId: string  | undefined) {
        this['identity_store_id'] = identityStoreId;
    }
    public get identityStoreId(): string | undefined {
        return this['identity_store_id'];
    }
    public withInstanceId(instanceId: string): InstanceMetadataEntryDto {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAlias(alias: string): InstanceMetadataEntryDto {
        this['alias'] = alias;
        return this;
    }
    public withInstanceUrn(instanceUrn: string): InstanceMetadataEntryDto {
        this['instance_urn'] = instanceUrn;
        return this;
    }
    public set instanceUrn(instanceUrn: string  | undefined) {
        this['instance_urn'] = instanceUrn;
    }
    public get instanceUrn(): string | undefined {
        return this['instance_urn'];
    }
}