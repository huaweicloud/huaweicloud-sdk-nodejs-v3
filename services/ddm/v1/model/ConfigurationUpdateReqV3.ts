

export class ConfigurationUpdateReqV3 {
    public description?: string;
    public values?: { [key: string]: string; };
    public name?: string;
    public constructor(values?: { [key: string]: string; }) { 
        this['values'] = values;
    }
    public withDescription(description: string): ConfigurationUpdateReqV3 {
        this['description'] = description;
        return this;
    }
    public withValues(values: { [key: string]: string; }): ConfigurationUpdateReqV3 {
        this['values'] = values;
        return this;
    }
    public withName(name: string): ConfigurationUpdateReqV3 {
        this['name'] = name;
        return this;
    }
}