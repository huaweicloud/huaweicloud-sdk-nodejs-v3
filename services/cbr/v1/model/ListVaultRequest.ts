

export class ListVaultRequest {
    public limit?: number;
    public name?: string;
    public offset?: number;
    private 'cloud_type'?: ListVaultRequestCloudTypeEnum | undefined;
    private 'protect_type'?: ListVaultRequestProtectTypeEnum | undefined;
    private 'object_type'?: string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public id?: string;
    private 'policy_id'?: string | undefined;
    public status?: string;
    private 'resource_ids'?: string | undefined;
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
    public withCloudType(cloudType: ListVaultRequestCloudTypeEnum): ListVaultRequest {
        this['cloud_type'] = cloudType;
        return this;
    }
    public set cloudType(cloudType: ListVaultRequestCloudTypeEnum | undefined) {
        this['cloud_type'] = cloudType;
    }
    public get cloudType() {
        return this['cloud_type'];
    }
    public withProtectType(protectType: ListVaultRequestProtectTypeEnum): ListVaultRequest {
        this['protect_type'] = protectType;
        return this;
    }
    public set protectType(protectType: ListVaultRequestProtectTypeEnum | undefined) {
        this['protect_type'] = protectType;
    }
    public get protectType() {
        return this['protect_type'];
    }
    public withObjectType(objectType: string): ListVaultRequest {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: string | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType() {
        return this['object_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVaultRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withId(id: string): ListVaultRequest {
        this['id'] = id;
        return this;
    }
    public withPolicyId(policyId: string): ListVaultRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId() {
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
    public set resourceIds(resourceIds: string | undefined) {
        this['resource_ids'] = resourceIds;
    }
    public get resourceIds() {
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
