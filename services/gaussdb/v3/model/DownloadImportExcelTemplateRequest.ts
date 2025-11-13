

export class DownloadImportExcelTemplateRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'template_type'?: string;
    public constructor(instanceId?: string, templateType?: string) { 
        this['instance_id'] = instanceId;
        this['template_type'] = templateType;
    }
    public withXLanguage(xLanguage: string): DownloadImportExcelTemplateRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): DownloadImportExcelTemplateRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTemplateType(templateType: string): DownloadImportExcelTemplateRequest {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: string  | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType(): string | undefined {
        return this['template_type'];
    }
}