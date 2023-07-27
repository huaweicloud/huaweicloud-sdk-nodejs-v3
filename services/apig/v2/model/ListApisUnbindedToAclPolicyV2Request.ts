

export class ListApisUnbindedToAclPolicyV2Request {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'acl_id'?: string;
    private 'api_id'?: string;
    private 'api_name'?: string;
    private 'env_id'?: string;
    private 'group_id'?: string;
    public constructor(instanceId?: string, aclId?: string) { 
        this['instance_id'] = instanceId;
        this['acl_id'] = aclId;
    }
    public withInstanceId(instanceId: string): ListApisUnbindedToAclPolicyV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListApisUnbindedToAclPolicyV2Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListApisUnbindedToAclPolicyV2Request {
        this['limit'] = limit;
        return this;
    }
    public withAclId(aclId: string): ListApisUnbindedToAclPolicyV2Request {
        this['acl_id'] = aclId;
        return this;
    }
    public set aclId(aclId: string  | undefined) {
        this['acl_id'] = aclId;
    }
    public get aclId(): string | undefined {
        return this['acl_id'];
    }
    public withApiId(apiId: string): ListApisUnbindedToAclPolicyV2Request {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withApiName(apiName: string): ListApisUnbindedToAclPolicyV2Request {
        this['api_name'] = apiName;
        return this;
    }
    public set apiName(apiName: string  | undefined) {
        this['api_name'] = apiName;
    }
    public get apiName(): string | undefined {
        return this['api_name'];
    }
    public withEnvId(envId: string): ListApisUnbindedToAclPolicyV2Request {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withGroupId(groupId: string): ListApisUnbindedToAclPolicyV2Request {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
}