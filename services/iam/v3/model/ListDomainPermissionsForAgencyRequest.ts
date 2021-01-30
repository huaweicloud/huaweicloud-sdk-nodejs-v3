

export class ListDomainPermissionsForAgencyRequest {
    private 'domain_id': string | undefined;
    private 'agency_id': string | undefined;
    public constructor(domainId: any, agencyId: any) { 
        this['domain_id'] = domainId;
        this['agency_id'] = agencyId;
    }
    public withDomainId(domainId: string): ListDomainPermissionsForAgencyRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withAgencyId(agencyId: string): ListDomainPermissionsForAgencyRequest {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId() {
        return this['agency_id'];
    }
}