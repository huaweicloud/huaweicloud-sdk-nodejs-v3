

export class SearchTemplateByIdRequest {
    private 'template_id'?: string;
    private 'share_type'?: string;
    public constructor(templateId?: string, shareType?: string) { 
        this['template_id'] = templateId;
        this['share_type'] = shareType;
    }
    public withTemplateId(templateId: string): SearchTemplateByIdRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withShareType(shareType: string): SearchTemplateByIdRequest {
        this['share_type'] = shareType;
        return this;
    }
    public set shareType(shareType: string  | undefined) {
        this['share_type'] = shareType;
    }
    public get shareType(): string | undefined {
        return this['share_type'];
    }
}