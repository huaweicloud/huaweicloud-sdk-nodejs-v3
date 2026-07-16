

export class PodIdentityAssociationUpdate {
    public agencyName?: string;
    public constructor(agencyName?: string) { 
        this['agencyName'] = agencyName;
    }
    public withAgencyName(agencyName: string): PodIdentityAssociationUpdate {
        this['agencyName'] = agencyName;
        return this;
    }
}