

export class WorkitemsDomain {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): WorkitemsDomain {
        this['id'] = id;
        return this;
    }
    public withName(name: string): WorkitemsDomain {
        this['name'] = name;
        return this;
    }
}