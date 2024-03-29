

export class AgencyTokenDomain {
    public name?: string;
    public id?: string;
    public constructor(name?: string, id?: string) { 
        this['name'] = name;
        this['id'] = id;
    }
    public withName(name: string): AgencyTokenDomain {
        this['name'] = name;
        return this;
    }
    public withId(id: string): AgencyTokenDomain {
        this['id'] = id;
        return this;
    }
}