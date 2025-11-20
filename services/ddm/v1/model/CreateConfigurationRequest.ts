

export class CreateConfigurationRequest {
    public name?: string;
    public description?: string;
    public values?: object;
    public constructor() { 
    }
    public withName(name: string): CreateConfigurationRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateConfigurationRequest {
        this['description'] = description;
        return this;
    }
    public withValues(values: object): CreateConfigurationRequest {
        this['values'] = values;
        return this;
    }
}