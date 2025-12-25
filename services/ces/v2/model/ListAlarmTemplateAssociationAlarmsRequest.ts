

export class ListAlarmTemplateAssociationAlarmsRequest {
    public offset?: number;
    public limit?: number;
    private 'template_id'?: string;
    public constructor(templateId?: string) { 
        this['template_id'] = templateId;
    }
    public withOffset(offset: number): ListAlarmTemplateAssociationAlarmsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAlarmTemplateAssociationAlarmsRequest {
        this['limit'] = limit;
        return this;
    }
    public withTemplateId(templateId: string): ListAlarmTemplateAssociationAlarmsRequest {
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