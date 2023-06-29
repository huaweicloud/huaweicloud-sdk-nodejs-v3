

export class DeleteTemplateRequest {
    private 'template_id': number | undefined;
    public constructor(templateId?: any) { 
        this['template_id'] = templateId;
    }
    public withTemplateId(templateId: number): DeleteTemplateRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId() {
        return this['template_id'];
    }
}