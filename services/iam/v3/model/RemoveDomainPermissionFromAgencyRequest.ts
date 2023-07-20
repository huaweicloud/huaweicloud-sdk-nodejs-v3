

export class RemoveDomainPermissionFromAgencyRequest {
    private 'domain_id'?: string;
    private 'agency_id'?: string;
    private 'role_id'?: string;
    public constructor(domainId?: string, agencyId?: string, roleId?: string) { 
        this['domain_id'] = domainId;
        this['agency_id'] = agencyId;
        this['role_id'] = roleId;
    }
    public withDomainId(domainId: string): RemoveDomainPermissionFromAgencyRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withAgencyId(agencyId: string): RemoveDomainPermissionFromAgencyRequest {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string  | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId(): string | undefined {
        return this['agency_id'];
    }
    public withRoleId(roleId: string): RemoveDomainPermissionFromAgencyRequest {
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