

export class GetResourceStsTokenResponseBodyAssumedAgency {
    public urn?: string;
    public id?: string;
    public constructor(urn?: string, id?: string) { 
        this['urn'] = urn;
        this['id'] = id;
    }
    public withUrn(urn: string): GetResourceStsTokenResponseBodyAssumedAgency {
        this['urn'] = urn;
        return this;
    }
    public withId(id: string): GetResourceStsTokenResponseBodyAssumedAgency {
        this['id'] = id;
        return this;
    }
}