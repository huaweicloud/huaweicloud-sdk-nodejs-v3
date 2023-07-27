

export class AclApiBindingCreate {
    private 'acl_id'?: string;
    private 'publish_ids'?: Array<string>;
    public constructor() { 
    }
    public withAclId(aclId: string): AclApiBindingCreate {
        this['acl_id'] = aclId;
        return this;
    }
    public set aclId(aclId: string  | undefined) {
        this['acl_id'] = aclId;
    }
    public get aclId(): string | undefined {
        return this['acl_id'];
    }
    public withPublishIds(publishIds: Array<string>): AclApiBindingCreate {
        this['publish_ids'] = publishIds;
        return this;
    }
    public set publishIds(publishIds: Array<string>  | undefined) {
        this['publish_ids'] = publishIds;
    }
    public get publishIds(): Array<string> | undefined {
        return this['publish_ids'];
    }
}