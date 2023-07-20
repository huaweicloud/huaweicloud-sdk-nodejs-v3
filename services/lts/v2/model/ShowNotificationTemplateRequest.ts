

export class ShowNotificationTemplateRequest {
    private 'domain_id'?: string;
    private 'template_name'?: string;
    private 'Content-Type'?: string;
    public constructor(domainId?: string, templateName?: string, contentType?: string) { 
        this['domain_id'] = domainId;
        this['template_name'] = templateName;
        this['Content-Type'] = contentType;
    }
    public withDomainId(domainId: string): ShowNotificationTemplateRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withTemplateName(templateName: string): ShowNotificationTemplateRequest {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withContentType(contentType: string): ShowNotificationTemplateRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}