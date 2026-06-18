

export class AssumedAgencyWithFederationDto {
    public urn?: string;
    public id?: string;
    public constructor(urn?: string, id?: string) { 
        this['urn'] = urn;
        this['id'] = id;
    }
    public withUrn(urn: string): AssumedAgencyWithFederationDto {
        this['urn'] = urn;
        return this;
    }
    public withId(id: string): AssumedAgencyWithFederationDto {
        this['id'] = id;
        return this;
    }
}