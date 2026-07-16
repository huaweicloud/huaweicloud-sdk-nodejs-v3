

export class AssumedAgency {
    public urn?: string;
    public id?: string;
    public constructor() { 
    }
    public withUrn(urn: string): AssumedAgency {
        this['urn'] = urn;
        return this;
    }
    public withId(id: string): AssumedAgency {
        this['id'] = id;
        return this;
    }
}