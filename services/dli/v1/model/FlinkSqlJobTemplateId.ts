

export class FlinkSqlJobTemplateId {
    private 'template_id'?: number;
    public constructor() { 
    }
    public withTemplateId(templateId: number): FlinkSqlJobTemplateId {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): number | undefined {
        return this['template_id'];
    }
}