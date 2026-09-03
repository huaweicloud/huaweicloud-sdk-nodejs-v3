

export class RelatedInstance {
    public id?: string;
    public type?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): RelatedInstance {
        this['id'] = id;
        return this;
    }
    public withType(type: string): RelatedInstance {
        this['type'] = type;
        return this;
    }
    public withName(name: string): RelatedInstance {
        this['name'] = name;
        return this;
    }
}