

export class UpdateDryRunConfigReqBody {
    private 'policy_type'?: UpdateDryRunConfigReqBodyPolicyTypeEnum | string;
    private 'root_id'?: string;
    public status?: UpdateDryRunConfigReqBodyStatusEnum | string;
    private 'bucket_name'?: string;
    private 'region_id'?: string;
    private 'bucket_prefix'?: string;
    private 'agency_name'?: string;
    public constructor(policyType?: string, rootId?: string) { 
        this['policy_type'] = policyType;
        this['root_id'] = rootId;
    }
    public withPolicyType(policyType: UpdateDryRunConfigReqBodyPolicyTypeEnum | string): UpdateDryRunConfigReqBody {
        this['policy_type'] = policyType;
        return this;
    }
    public set policyType(policyType: UpdateDryRunConfigReqBodyPolicyTypeEnum | string  | undefined) {
        this['policy_type'] = policyType;
    }
    public get policyType(): UpdateDryRunConfigReqBodyPolicyTypeEnum | string | undefined {
        return this['policy_type'];
    }
    public withRootId(rootId: string): UpdateDryRunConfigReqBody {
        this['root_id'] = rootId;
        return this;
    }
    public set rootId(rootId: string  | undefined) {
        this['root_id'] = rootId;
    }
    public get rootId(): string | undefined {
        return this['root_id'];
    }
    public withStatus(status: UpdateDryRunConfigReqBodyStatusEnum | string): UpdateDryRunConfigReqBody {
        this['status'] = status;
        return this;
    }
    public withBucketName(bucketName: string): UpdateDryRunConfigReqBody {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withRegionId(regionId: string): UpdateDryRunConfigReqBody {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withBucketPrefix(bucketPrefix: string): UpdateDryRunConfigReqBody {
        this['bucket_prefix'] = bucketPrefix;
        return this;
    }
    public set bucketPrefix(bucketPrefix: string  | undefined) {
        this['bucket_prefix'] = bucketPrefix;
    }
    public get bucketPrefix(): string | undefined {
        return this['bucket_prefix'];
    }
    public withAgencyName(agencyName: string): UpdateDryRunConfigReqBody {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateDryRunConfigReqBodyPolicyTypeEnum {
    SERVICE_CONTROL_POLICY = 'service_control_policy'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateDryRunConfigReqBodyStatusEnum {
    ENABLED = 'enabled',
    DISABLED = 'disabled'
}
