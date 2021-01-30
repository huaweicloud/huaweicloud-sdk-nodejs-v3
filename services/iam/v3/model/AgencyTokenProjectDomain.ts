

export class AgencyTokenProjectDomain {
    public name: string;
    public id: string;
    public constructor(name: any, id: any) { 
        this['name'] = name;
        this['id'] = id;
    }
    public withName(name: string): AgencyTokenProjectDomain {
        this['name'] = name;
        return this;
    }
    public withId(id: string): AgencyTokenProjectDomain {
        this['id'] = id;
        return this;
    }
}