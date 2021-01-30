

export class AgencyTokenUserDomain {
    public id: string;
    public name: string;
    public constructor(id: any, name: any) { 
        this['id'] = id;
        this['name'] = name;
    }
    public withId(id: string): AgencyTokenUserDomain {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AgencyTokenUserDomain {
        this['name'] = name;
        return this;
    }
}