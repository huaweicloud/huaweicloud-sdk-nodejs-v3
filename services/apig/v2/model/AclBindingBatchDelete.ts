

export class AclBindingBatchDelete {
    private 'acl_bindings'?: Array<string>;
    public constructor() { 
    }
    public withAclBindings(aclBindings: Array<string>): AclBindingBatchDelete {
        this['acl_bindings'] = aclBindings;
        return this;
    }
    public set aclBindings(aclBindings: Array<string>  | undefined) {
        this['acl_bindings'] = aclBindings;
    }
    public get aclBindings(): Array<string> | undefined {
        return this['acl_bindings'];
    }
}