

export class TemplateApplyRequestBody {
    public resources?: string;
    public constructor() { 
    }
    public withResources(resources: string): TemplateApplyRequestBody {
        this['resources'] = resources;
        return this;
    }
}