

export class AgencyAssumedbyUserDomain {
    public name: string;
    public id: string;
    public constructor(name?: any, id?: any) { 
        this['name'] = name;
        this['id'] = id;
    }
    public withName(name: string): AgencyAssumedbyUserDomain {
        this['name'] = name;
        return this;
    }
    public withId(id: string): AgencyAssumedbyUserDomain {
        this['id'] = id;
        return this;
    }
}