

export class Domain {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): Domain {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Domain {
        this['name'] = name;
        return this;
    }
}