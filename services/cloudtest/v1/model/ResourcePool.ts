

export class ResourcePool {
    public id?: string;
    public name?: string;
    public type?: string;
    public constructor() { 
    }
    public withId(id: string): ResourcePool {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ResourcePool {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ResourcePool {
        this['type'] = type;
        return this;
    }
}