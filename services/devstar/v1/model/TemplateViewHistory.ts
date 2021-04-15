

export class TemplateViewHistory {
    private 'template_id': string | undefined;
    private 'template_title': string | undefined;
    public constructor(templateId?: any, templateTitle?: any) { 
        this['template_id'] = templateId;
        this['template_title'] = templateTitle;
    }
    public withTemplateId(templateId: string): TemplateViewHistory {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId() {
        return this['template_id'];
    }
    public withTemplateTitle(templateTitle: string): TemplateViewHistory {
        this['template_title'] = templateTitle;
        return this;
    }
    public set templateTitle(templateTitle: string | undefined) {
        this['template_title'] = templateTitle;
    }
    public get templateTitle() {
        return this['template_title'];
    }
}