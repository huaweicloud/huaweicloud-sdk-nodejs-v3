

export class ListAlarmTemplateAssociationAlarmsRequest {
    private 'template_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(templateId?: string) { 
        this['template_id'] = templateId;
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
    public withOffset(offset: number): ListAlarmTemplateAssociationAlarmsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAlarmTemplateAssociationAlarmsRequest {
        this['limit'] = limit;
        return this;
    }
}