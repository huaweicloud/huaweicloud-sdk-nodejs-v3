

export class UpdateCertificateDTO {
    private 'provision_enable'?: boolean;
    private 'template_id'?: string;
    public constructor() { 
    }
    public withProvisionEnable(provisionEnable: boolean): UpdateCertificateDTO {
        this['provision_enable'] = provisionEnable;
        return this;
    }
    public set provisionEnable(provisionEnable: boolean  | undefined) {
        this['provision_enable'] = provisionEnable;
    }
    public get provisionEnable(): boolean | undefined {
        return this['provision_enable'];
    }
    public withTemplateId(templateId: string): UpdateCertificateDTO {
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