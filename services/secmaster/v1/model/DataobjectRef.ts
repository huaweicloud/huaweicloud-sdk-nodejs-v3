

export class DataobjectRef {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): DataobjectRef {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DataobjectRef {
        this['name'] = name;
        return this;
    }
}