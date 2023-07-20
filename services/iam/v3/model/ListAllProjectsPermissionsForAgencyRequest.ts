

export class ListAllProjectsPermissionsForAgencyRequest {
    private 'agency_id'?: string;
    private 'domain_id'?: string;
    public constructor(agencyId?: string, domainId?: string) { 
        this['agency_id'] = agencyId;
        this['domain_id'] = domainId;
    }
    public withAgencyId(agencyId: string): ListAllProjectsPermissionsForAgencyRequest {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string  | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId(): string | undefined {
        return this['agency_id'];
    }
    public withDomainId(domainId: string): ListAllProjectsPermissionsForAgencyRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
}