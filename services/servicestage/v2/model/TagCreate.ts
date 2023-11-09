

export class TagCreate {
    public name?: string;
    public description?: string;
    public constructor(name?: string, description?: string) { 
        this['name'] = name;
        this['description'] = description;
    }
    public withName(name: string): TagCreate {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): TagCreate {
        this['description'] = description;
        return this;
    }
}