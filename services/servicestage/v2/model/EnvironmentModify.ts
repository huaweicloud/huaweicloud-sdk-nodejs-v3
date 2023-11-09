

export class EnvironmentModify {
    public name?: string;
    public alias?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): EnvironmentModify {
        this['name'] = name;
        return this;
    }
    public withAlias(alias: string): EnvironmentModify {
        this['alias'] = alias;
        return this;
    }
    public withDescription(description: string): EnvironmentModify {
        this['description'] = description;
        return this;
    }
}