

export class AssociateAgencyWithAllProjectsPermissionRequest {
    private 'agency_id': string | undefined;
    private 'domain_id': string | undefined;
    private 'role_id': string | undefined;
    public constructor(agencyId: any, domainId: any, roleId: any) { 
        this['agency_id'] = agencyId;
        this['domain_id'] = domainId;
        this['role_id'] = roleId;
    }
    public withAgencyId(agencyId: string): AssociateAgencyWithAllProjectsPermissionRequest {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId() {
        return this['agency_id'];
    }
    public withDomainId(domainId: string): AssociateAgencyWithAllProjectsPermissionRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withRoleId(roleId: string): AssociateAgencyWithAllProjectsPermissionRequest {
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