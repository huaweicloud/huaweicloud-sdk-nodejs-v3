

export class ConfigurationForUpdate {
    public name?: string;
    public description?: string;
    public values?: { [key: string]: string; };
    public constructor() { 
    }
    public withName(name: string): ConfigurationForUpdate {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ConfigurationForUpdate {
        this['description'] = description;
        return this;
    }
    public withValues(values: { [key: string]: string; }): ConfigurationForUpdate {
        this['values'] = values;
        return this;
    }
}