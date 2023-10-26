

export class ComponentUpdateParam {
    public description?: string;
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withDescription(description: string): ComponentUpdateParam {
        this['description'] = description;
        return this;
    }
    public withName(name: string): ComponentUpdateParam {
        this['name'] = name;
        return this;
    }
}