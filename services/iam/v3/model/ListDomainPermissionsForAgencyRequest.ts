

export class ListDomainPermissionsForAgencyRequest {
    private 'domain_id'?: string;
    private 'agency_id'?: string;
    public constructor(domainId?: string, agencyId?: string) { 
        this['domain_id'] = domainId;
        this['agency_id'] = agencyId;
    }
    public withDomainId(domainId: string): ListDomainPermissionsForAgencyRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withAgencyId(agencyId: string): ListDomainPermissionsForAgencyRequest {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string  | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId(): string | undefined {
        return this['agency_id'];
    }
}