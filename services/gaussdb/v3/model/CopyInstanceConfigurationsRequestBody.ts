

export class CopyInstanceConfigurationsRequestBody {
    public name?: string;
    public description?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CopyInstanceConfigurationsRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CopyInstanceConfigurationsRequestBody {
        this['description'] = description;
        return this;
    }
}