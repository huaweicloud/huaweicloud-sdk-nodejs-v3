

export class ConfigurationCopyRequestBody {
    public name?: string;
    public description?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ConfigurationCopyRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ConfigurationCopyRequestBody {
        this['description'] = description;
        return this;
    }
}