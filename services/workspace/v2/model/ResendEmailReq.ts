

export class ResendEmailReq {
    private 'template_id'?: string;
    private 'phone_template_id'?: string;
    public constructor() { 
    }
    public withTemplateId(templateId: string): ResendEmailReq {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withPhoneTemplateId(phoneTemplateId: string): ResendEmailReq {
        this['phone_template_id'] = phoneTemplateId;
        return this;
    }
    public set phoneTemplateId(phoneTemplateId: string  | undefined) {
        this['phone_template_id'] = phoneTemplateId;
    }
    public get phoneTemplateId(): string | undefined {
        return this['phone_template_id'];
    }
}