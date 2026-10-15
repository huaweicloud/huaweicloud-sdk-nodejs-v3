

export class InstanceHealthReportConfigDto {
    private 'instance_id'?: string;
    private 'template_id'?: number;
    private 'template_name'?: string;
    public system?: boolean;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): InstanceHealthReportConfigDto {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTemplateId(templateId: number): InstanceHealthReportConfigDto {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): number | undefined {
        return this['template_id'];
    }
    public withTemplateName(templateName: string): InstanceHealthReportConfigDto {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withSystem(system: boolean): InstanceHealthReportConfigDto {
        this['system'] = system;
        return this;
    }
}