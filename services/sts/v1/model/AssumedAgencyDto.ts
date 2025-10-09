

export class AssumedAgencyDto {
    public urn?: string;
    public id?: string;
    public constructor(urn?: string, id?: string) { 
        this['urn'] = urn;
        this['id'] = id;
    }
    public withUrn(urn: string): AssumedAgencyDto {
        this['urn'] = urn;
        return this;
    }
    public withId(id: string): AssumedAgencyDto {
        this['id'] = id;
        return this;
    }
}