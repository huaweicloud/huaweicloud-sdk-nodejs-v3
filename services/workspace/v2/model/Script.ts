

export class Script {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): Script {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Script {
        this['name'] = name;
        return this;
    }
}