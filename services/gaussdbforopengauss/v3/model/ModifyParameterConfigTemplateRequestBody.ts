

export class ModifyParameterConfigTemplateRequestBody {
    public values?: { [key: string]: string; };
    public description?: string;
    public constructor() { 
    }
    public withValues(values: { [key: string]: string; }): ModifyParameterConfigTemplateRequestBody {
        this['values'] = values;
        return this;
    }
    public withDescription(description: string): ModifyParameterConfigTemplateRequestBody {
        this['description'] = description;
        return this;
    }
}