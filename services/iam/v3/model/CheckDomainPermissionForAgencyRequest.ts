

export class CheckDomainPermissionForAgencyRequest {
    private 'domain_id': string | undefined;
    private 'agency_id': string | undefined;
    private 'role_id': string | undefined;
    public constructor(domainId?: any, agencyId?: any, roleId?: any) { 
        this['domain_id'] = domainId;
        this['agency_id'] = agencyId;
        this['role_id'] = roleId;
    }
    public withDomainId(domainId: string): CheckDomainPermissionForAgencyRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withAgencyId(agencyId: string): CheckDomainPermissionForAgencyRequest {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId() {
        return this['agency_id'];
    }
    public withRoleId(roleId: string): CheckDomainPermissionForAgencyRequest {
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