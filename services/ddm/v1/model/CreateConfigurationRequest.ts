

export class CreateConfigurationRequest {
    public name?: string;
    public description?: string;
    public values?: { [key: string]: string; };
    public constructor(name?: string, description?: string) { 
        this['name'] = name;
        this['description'] = description;
    }
    public withName(name: string): CreateConfigurationRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateConfigurationRequest {
        this['description'] = description;
        return this;
    }
    public withValues(values: { [key: string]: string; }): CreateConfigurationRequest {
        this['values'] = values;
        return this;
    }
}