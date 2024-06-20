

export class DeleteProvisioningTemplateRequest {
    private 'Instance-Id'?: string;
    private 'template_id'?: string;
    public constructor(templateId?: string) { 
        this['template_id'] = templateId;
    }
    public withInstanceId(instanceId: string): DeleteProvisioningTemplateRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withTemplateId(templateId: string): DeleteProvisioningTemplateRequest {
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