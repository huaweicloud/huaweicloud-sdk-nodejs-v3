

export class SaveAsParameterConfigTemplateRequestBody {
    public name?: string;
    public description?: string;
    public constructor() { 
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