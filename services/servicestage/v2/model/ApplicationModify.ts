

export class ApplicationModify {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): ApplicationModify {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ApplicationModify {
        this['description'] = description;
        return this;
    }
}