

export class CopyConfigurationsRequestBody {
    public name?: string;
    public description?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CopyConfigurationsRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CopyConfigurationsRequestBody {
        this['description'] = description;
        return this;
    }
}