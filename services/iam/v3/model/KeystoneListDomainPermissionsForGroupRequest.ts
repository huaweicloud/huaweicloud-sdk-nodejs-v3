

export class KeystoneListDomainPermissionsForGroupRequest {
    private 'domain_id': string | undefined;
    private 'group_id': string | undefined;
    public constructor(domainId: any, groupId: any) { 
        this['domain_id'] = domainId;
        this['group_id'] = groupId;
    }
    public withDomainId(domainId: string): KeystoneListDomainPermissionsForGroupRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withGroupId(groupId: string): KeystoneListDomainPermissionsForGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
}