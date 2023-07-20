

export class RemoveAllProjectsPermissionFromAgencyRequest {
    private 'agency_id'?: string;
    private 'domain_id'?: string;
    private 'role_id'?: string;
    public constructor(agencyId?: string, domainId?: string, roleId?: string) { 
        this['agency_id'] = agencyId;
        this['domain_id'] = domainId;
        this['role_id'] = roleId;
    }
    public withAgencyId(agencyId: string): RemoveAllProjectsPermissionFromAgencyRequest {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string  | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId(): string | undefined {
        return this['agency_id'];
    }
    public withDomainId(domainId: string): RemoveAllProjectsPermissionFromAgencyRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRoleId(roleId: string): RemoveAllProjectsPermissionFromAgencyRequest {
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