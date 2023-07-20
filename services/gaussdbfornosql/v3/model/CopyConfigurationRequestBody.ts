

export class CopyConfigurationRequestBody {
    public name?: string;
    public description?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CopyConfigurationRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CopyConfigurationRequestBody {
        this['description'] = description;
        return this;
    }
}