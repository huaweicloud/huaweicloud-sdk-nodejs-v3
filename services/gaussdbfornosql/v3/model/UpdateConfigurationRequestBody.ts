

export class UpdateConfigurationRequestBody {
    public name?: string;
    public description?: string;
    public values?: { [key: string]: string; };
    public constructor() { 
    }
    public withName(name: string): UpdateConfigurationRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateConfigurationRequestBody {
        this['description'] = description;
        return this;
    }
    public withValues(values: { [key: string]: string; }): UpdateConfigurationRequestBody {
        this['values'] = values;
        return this;
    }
}