

export class DeleteApiAclBindingV2Request {
    private 'instance_id'?: string;
    private 'acl_bindings_id'?: string;
    public constructor(instanceId?: string, aclBindingsId?: string) { 
        this['instance_id'] = instanceId;
        this['acl_bindings_id'] = aclBindingsId;
    }
    public withInstanceId(instanceId: string): DeleteApiAclBindingV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAclBindingsId(aclBindingsId: string): DeleteApiAclBindingV2Request {
        this['acl_bindings_id'] = aclBindingsId;
        return this;
    }
    public set aclBindingsId(aclBindingsId: string  | undefined) {
        this['acl_bindings_id'] = aclBindingsId;
    }
    public get aclBindingsId(): string | undefined {
        return this['acl_bindings_id'];
    }
}