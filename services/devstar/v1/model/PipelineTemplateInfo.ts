

export class PipelineTemplateInfo {
    public id?: string;
    public name?: string;
    public detail?: string;
    public constructor() { 
    }
    public withId(id: string): PipelineTemplateInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PipelineTemplateInfo {
        this['name'] = name;
        return this;
    }
    public withDetail(detail: string): PipelineTemplateInfo {
        this['detail'] = detail;
        return this;
    }
}