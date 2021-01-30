

export class AgencyTokenScopeProject {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): AgencyTokenScopeProject {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AgencyTokenScopeProject {
        this['name'] = name;
        return this;
    }
}