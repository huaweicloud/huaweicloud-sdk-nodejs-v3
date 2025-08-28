

export class Instance {
    public id?: string;
    public name?: string;
    public constructor(id?: string, name?: string) { 
        this['id'] = id;
        this['name'] = name;
    }
    public withId(id: string): Instance {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Instance {
        this['name'] = name;
        return this;
    }
}