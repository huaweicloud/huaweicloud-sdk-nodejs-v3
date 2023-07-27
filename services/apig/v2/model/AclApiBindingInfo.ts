

export class AclApiBindingInfo {
    public id?: string;
    private 'api_id'?: string;
    private 'env_id'?: string;
    private 'acl_id'?: string;
    private 'create_time'?: Date;
    public constructor() { 
    }
    public withId(id: string): AclApiBindingInfo {
        this['id'] = id;
        return this;
    }
    public withApiId(apiId: string): AclApiBindingInfo {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withEnvId(envId: string): AclApiBindingInfo {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withAclId(aclId: string): AclApiBindingInfo {
        this['acl_id'] = aclId;
        return this;
    }
    public set aclId(aclId: string  | undefined) {
        this['acl_id'] = aclId;
    }
    public get aclId(): string | undefined {
        return this['acl_id'];
    }
    public withCreateTime(createTime: Date): AclApiBindingInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
}