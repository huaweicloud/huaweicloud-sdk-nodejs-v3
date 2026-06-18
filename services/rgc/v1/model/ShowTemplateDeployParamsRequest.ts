

export class ShowTemplateDeployParamsRequest {
    private 'template_name'?: string;
    public version?: string;
    private 'account_id'?: string;
    public constructor(templateName?: string, version?: string) { 
        this['template_name'] = templateName;
        this['version'] = version;
    }
    public withTemplateName(templateName: string): ShowTemplateDeployParamsRequest {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withVersion(version: string): ShowTemplateDeployParamsRequest {
        this['version'] = version;
        return this;
    }
    public withAccountId(accountId: string): ShowTemplateDeployParamsRequest {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
}