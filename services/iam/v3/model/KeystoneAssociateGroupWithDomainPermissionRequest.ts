

export class KeystoneAssociateGroupWithDomainPermissionRequest {
    private 'domain_id'?: string;
    private 'group_id'?: string;
    private 'role_id'?: string;
    public constructor(domainId?: string, groupId?: string, roleId?: string) { 
        this['domain_id'] = domainId;
        this['group_id'] = groupId;
        this['role_id'] = roleId;
    }
    public withDomainId(domainId: string): KeystoneAssociateGroupWithDomainPermissionRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withGroupId(groupId: string): KeystoneAssociateGroupWithDomainPermissionRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withRoleId(roleId: string): KeystoneAssociateGroupWithDomainPermissionRequest {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
}