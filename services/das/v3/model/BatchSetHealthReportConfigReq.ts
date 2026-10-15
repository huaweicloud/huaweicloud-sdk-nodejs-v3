

export class BatchSetHealthReportConfigReq {
    private 'instance_ids'?: Array<string>;
    private 'template_id'?: string;
    public constructor(instanceIds?: Array<string>, templateId?: string) { 
        this['instance_ids'] = instanceIds;
        this['template_id'] = templateId;
    }
    public withInstanceIds(instanceIds: Array<string>): BatchSetHealthReportConfigReq {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
    public withTemplateId(templateId: string): BatchSetHealthReportConfigReq {
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