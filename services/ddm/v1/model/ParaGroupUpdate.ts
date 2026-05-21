

export class ParaGroupUpdate {
    public name?: string;
    public description?: string;
    public values?: { [key: string]: string; };
    public constructor(values?: { [key: string]: string; }) { 
        this['values'] = values;
    }
    public withName(name: string): ParaGroupUpdate {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ParaGroupUpdate {
        this['description'] = description;
        return this;
    }
    public withValues(values: { [key: string]: string; }): ParaGroupUpdate {
        this['values'] = values;
        return this;
    }
}