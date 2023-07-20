

export class KeystoneListDomainPermissionsForGroupRequest {
    private 'domain_id'?: string;
    private 'group_id'?: string;
    public constructor(domainId?: string, groupId?: string) { 
        this['domain_id'] = domainId;
        this['group_id'] = groupId;
    }
    public withDomainId(domainId: string): KeystoneListDomainPermissionsForGroupRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withGroupId(groupId: string): KeystoneListDomainPermissionsForGroupRequest {
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