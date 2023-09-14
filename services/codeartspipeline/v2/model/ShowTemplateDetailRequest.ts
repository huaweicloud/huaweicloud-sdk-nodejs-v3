

export class ShowTemplateDetailRequest {
    private 'template_id'?: string;
    private 'template_type'?: string;
    public source?: string;
    public constructor(templateId?: string, templateType?: string) { 
        this['template_id'] = templateId;
        this['template_type'] = templateType;
    }
    public withTemplateId(templateId: string): ShowTemplateDetailRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTemplateType(templateType: string): ShowTemplateDetailRequest {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: string  | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType(): string | undefined {
        return this['template_type'];
    }
    public withSource(source: string): ShowTemplateDetailRequest {
        this['source'] = source;
        return this;
    }
}