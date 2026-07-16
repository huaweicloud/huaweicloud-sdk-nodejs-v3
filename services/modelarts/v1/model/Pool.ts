

export class Pool {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): Pool {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Pool {
        this['name'] = name;
        return this;
    }
}