

export class AgencyTokenScopeDomain {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): AgencyTokenScopeDomain {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AgencyTokenScopeDomain {
        this['name'] = name;
        return this;
    }
}