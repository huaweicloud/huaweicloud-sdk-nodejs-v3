

export class Group {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): Group {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Group {
        this['name'] = name;
        return this;
    }
}