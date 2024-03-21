

export class ShowFunctionTemplateRequest {
    private 'template_id'?: string;
    private 'Content-Type'?: string;
    public constructor(templateId?: string, contentType?: string) { 
        this['template_id'] = templateId;
        this['Content-Type'] = contentType;
    }
    public withTemplateId(templateId: string): ShowFunctionTemplateRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withContentType(contentType: string): ShowFunctionTemplateRequest {
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