

export class DryRunConfigDto {
    private 'root_id'?: string;
    public status?: DryRunConfigDtoStatusEnum | string;
    private 'bucket_name'?: string;
    private 'region_id'?: string;
    private 'bucket_prefix'?: string;
    private 'agency_name'?: string;
    private 'policy_type'?: DryRunConfigDtoPolicyTypeEnum | string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor(rootId?: string, status?: string, policyType?: string, createdAt?: Date, updatedAt?: Date) { 
        this['root_id'] = rootId;
        this['status'] = status;
        this['policy_type'] = policyType;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withRootId(rootId: string): DryRunConfigDto {
        this['root_id'] = rootId;
        return this;
    }
    public set rootId(rootId: string  | undefined) {
        this['root_id'] = rootId;
    }
    public get rootId(): string | undefined {
        return this['root_id'];
    }
    public withStatus(status: DryRunConfigDtoStatusEnum | string): DryRunConfigDto {
        this['status'] = status;
        return this;
    }
    public withBucketName(bucketName: string): DryRunConfigDto {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withRegionId(regionId: string): DryRunConfigDto {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withBucketPrefix(bucketPrefix: string): DryRunConfigDto {
        this['bucket_prefix'] = bucketPrefix;
        return this;
    }
    public set bucketPrefix(bucketPrefix: string  | undefined) {
        this['bucket_prefix'] = bucketPrefix;
    }
    public get bucketPrefix(): string | undefined {
        return this['bucket_prefix'];
    }
    public withAgencyName(agencyName: string): DryRunConfigDto {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
    public withPolicyType(policyType: DryRunConfigDtoPolicyTypeEnum | string): DryRunConfigDto {
        this['policy_type'] = policyType;
        return this;
    }
    public set policyType(policyType: DryRunConfigDtoPolicyTypeEnum | string  | undefined) {
        this['policy_type'] = policyType;
    }
    public get policyType(): DryRunConfigDtoPolicyTypeEnum | string | undefined {
        return this['policy_type'];
    }
    public withCreatedAt(createdAt: Date): DryRunConfigDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): DryRunConfigDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DryRunConfigDtoStatusEnum {
    ENABLED = 'enabled',
    PENDING_ENABLE = 'pending_enable',
    DISABLED = 'disabled',
    PENDING_DISABLE = 'pending_disable'
}
/**
    * @export
    * @enum {string}
    */
export enum DryRunConfigDtoPolicyTypeEnum {
    SERVICE_CONTROL_POLICY = 'service_control_policy'
}
