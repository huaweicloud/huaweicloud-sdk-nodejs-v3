

export class ShowNotificationTemplateRequest {
    private 'domain_id': string | undefined;
    private 'template_name': string | undefined;
    private 'Content-Type': string | undefined;
    public constructor(domainId?: any, templateName?: any, contentType?: any) { 
        this['domain_id'] = domainId;
        this['template_name'] = templateName;
        this['Content-Type'] = contentType;
    }
    public withDomainId(domainId: string): ShowNotificationTemplateRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withTemplateName(templateName: string): ShowNotificationTemplateRequest {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName() {
        return this['template_name'];
    }
    public withContentType(contentType: string): ShowNotificationTemplateRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
}