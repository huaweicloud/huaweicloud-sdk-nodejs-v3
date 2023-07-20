

export class TemplateViewHistory {
    private 'template_id'?: string;
    private 'template_title'?: string;
    public constructor(templateId?: string, templateTitle?: string) { 
        this['template_id'] = templateId;
        this['template_title'] = templateTitle;
    }
    public withTemplateId(templateId: string): TemplateViewHistory {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTemplateTitle(templateTitle: string): TemplateViewHistory {
        this['template_title'] = templateTitle;
        return this;
    }
    public set templateTitle(templateTitle: string  | undefined) {
        this['template_title'] = templateTitle;
    }
    public get templateTitle(): string | undefined {
        return this['template_title'];
    }
}