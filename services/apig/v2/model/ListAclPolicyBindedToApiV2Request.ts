

export class ListAclPolicyBindedToApiV2Request {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'api_id'?: string;
    private 'env_id'?: string;
    private 'env_name'?: string;
    private 'acl_id'?: string;
    private 'acl_name'?: string;
    public constructor(instanceId?: string, apiId?: string) { 
        this['instance_id'] = instanceId;
        this['api_id'] = apiId;
    }
    public withInstanceId(instanceId: string): ListAclPolicyBindedToApiV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListAclPolicyBindedToApiV2Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAclPolicyBindedToApiV2Request {
        this['limit'] = limit;
        return this;
    }
    public withApiId(apiId: string): ListAclPolicyBindedToApiV2Request {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withEnvId(envId: string): ListAclPolicyBindedToApiV2Request {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withEnvName(envName: string): ListAclPolicyBindedToApiV2Request {
        this['env_name'] = envName;
        return this;
    }
    public set envName(envName: string  | undefined) {
        this['env_name'] = envName;
    }
    public get envName(): string | undefined {
        return this['env_name'];
    }
    public withAclId(aclId: string): ListAclPolicyBindedToApiV2Request {
        this['acl_id'] = aclId;
        return this;
    }
    public set aclId(aclId: string  | undefined) {
        this['acl_id'] = aclId;
    }
    public get aclId(): string | undefined {
        return this['acl_id'];
    }
    public withAclName(aclName: string): ListAclPolicyBindedToApiV2Request {
        this['acl_name'] = aclName;
        return this;
    }
    public set aclName(aclName: string  | undefined) {
        this['acl_name'] = aclName;
    }
    public get aclName(): string | undefined {
        return this['acl_name'];
    }
}