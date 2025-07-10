

export class DeleteTemplateRequest {
    private 'template_name'?: string;
    public constructor(templateName?: string) { 
        this['template_name'] = templateName;
    }
    public withTemplateName(templateName: string): DeleteTemplateRequest {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
}