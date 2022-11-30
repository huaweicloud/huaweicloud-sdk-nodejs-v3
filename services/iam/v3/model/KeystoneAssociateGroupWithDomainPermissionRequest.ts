

export class KeystoneAssociateGroupWithDomainPermissionRequest {
    private 'domain_id': string | undefined;
    private 'group_id': string | undefined;
    private 'role_id': string | undefined;
    public constructor(domainId?: any, groupId?: any, roleId?: any) { 
        this['domain_id'] = domainId;
        this['group_id'] = groupId;
        this['role_id'] = roleId;
    }
    public withDomainId(domainId: string): KeystoneAssociateGroupWithDomainPermissionRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withGroupId(groupId: string): KeystoneAssociateGroupWithDomainPermissionRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withRoleId(roleId: string): KeystoneAssociateGroupWithDomainPermissionRequest {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId() {
        return this['role_id'];
    }
}