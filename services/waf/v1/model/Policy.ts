

export class Policy {
    public id?: string;
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withId(id: string): Policy {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Policy {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): Policy {
        this['description'] = description;
        return this;
    }
}