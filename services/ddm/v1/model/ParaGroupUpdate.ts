

export class ParaGroupUpdate {
    public name?: string;
    public description?: string;
    public values?: object;
    public constructor() { 
    }
    public withName(name: string): ParaGroupUpdate {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ParaGroupUpdate {
        this['description'] = description;
        return this;
    }
    public withValues(values: object): ParaGroupUpdate {
        this['values'] = values;
        return this;
    }
}