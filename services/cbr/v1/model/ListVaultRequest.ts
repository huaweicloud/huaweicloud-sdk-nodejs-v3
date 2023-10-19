

export class ListVaultRequest {
    public limit?: number;
    public name?: string;
    public offset?: number;
    private 'cloud_type'?: ListVaultRequestCloudTypeEnum | string;
    private 'protect_type'?: ListVaultRequestProtectTypeEnum | string;
    private 'object_type'?: string;
    private 'enterprise_project_id'?: string;
    public id?: Array<string>;
    private 'policy_id'?: string;
    public status?: string;
    private 'resource_ids'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListVaultRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListVaultRequest {
        this['name'] = name;
        return this;
    }
    public withOffset(offset: number): ListVaultRequest {
        this['offset'] = offset;
        return this;
    }
    public withCloudType(cloudType: ListVaultRequestCloudTypeEnum | string): ListVaultRequest {
        this['cloud_type'] = cloudType;
        return this;
    }
    public set cloudType(cloudType: ListVaultRequestCloudTypeEnum | string  | undefined) {
        this['cloud_type'] = cloudType;
    }
    public get cloudType(): ListVaultRequestCloudTypeEnum | string | undefined {
        return this['cloud_type'];
    }
    public withProtectType(protectType: ListVaultRequestProtectTypeEnum | string): ListVaultRequest {
        this['protect_type'] = protectType;
        return this;
    }
    public set protectType(protectType: ListVaultRequestProtectTypeEnum | string  | undefined) {
        this['protect_type'] = protectType;
    }
    public get protectType(): ListVaultRequestProtectTypeEnum | string | undefined {
        return this['protect_type'];
    }
    public withObjectType(objectType: string): ListVaultRequest {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): string | undefined {
        return this['object_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVaultRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withId(id: Array<string>): ListVaultRequest {
        this['id'] = id;
        return this;
    }
    public withPolicyId(policyId: string): ListVaultRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withStatus(status: string): ListVaultRequest {
        this['status'] = status;
        return this;
    }
    public withResourceIds(resourceIds: string): ListVaultRequest {
        this['resource_ids'] = resourceIds;
        return this;
    }
    public set resourceIds(resourceIds: string  | undefined) {
        this['resource_ids'] = resourceIds;
    }
    public get resourceIds(): string | undefined {
        return this['resource_ids'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListVaultRequestCloudTypeEnum {
    PUBLIC = 'public',
    HYBRID = 'hybrid'
}
/**
    * @export
    * @enum {string}
    */
export enum ListVaultRequestProtectTypeEnum {
    BACKUP = 'backup',
    REPLICATION = 'replication'
}
