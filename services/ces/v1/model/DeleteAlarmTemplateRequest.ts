

export class DeleteAlarmTemplateRequest {
    private 'template_id'?: string;
    public constructor(templateId?: string) { 
        this['template_id'] = templateId;
    }
    public withTemplateId(templateId: string): DeleteAlarmTemplateRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
}