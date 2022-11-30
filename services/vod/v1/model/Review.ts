

export class Review {
    private 'template_id': string | undefined;
    public constructor(templateId?: any) { 
        this['template_id'] = templateId;
    }
    public withTemplateId(templateId: string): Review {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId() {
        return this['template_id'];
    }
}