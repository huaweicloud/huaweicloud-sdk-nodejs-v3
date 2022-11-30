

export class ListAllProjectsPermissionsForAgencyRequest {
    private 'agency_id': string | undefined;
    private 'domain_id': string | undefined;
    public constructor(agencyId?: any, domainId?: any) { 
        this['agency_id'] = agencyId;
        this['domain_id'] = domainId;
    }
    public withAgencyId(agencyId: string): ListAllProjectsPermissionsForAgencyRequest {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId() {
        return this['agency_id'];
    }
    public withDomainId(domainId: string): ListAllProjectsPermissionsForAgencyRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
}