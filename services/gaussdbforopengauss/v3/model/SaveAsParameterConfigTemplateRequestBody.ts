

export class SaveAsParameterConfigTemplateRequestBody {
    public name?: string;
    public description?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): SaveAsParameterConfigTemplateRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): SaveAsParameterConfigTemplateRequestBody {
        this['description'] = description;
        return this;
    }
}