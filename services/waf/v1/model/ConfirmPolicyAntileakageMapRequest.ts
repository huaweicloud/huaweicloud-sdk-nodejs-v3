

export class ConfirmPolicyAntileakageMapRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    public lang?: string;
    public constructor(contentType?: string, lang?: string) { 
        this['Content-Type'] = contentType;
        this['lang'] = lang;
    }
    public withContentType(contentType: string): ConfirmPolicyAntileakageMapRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ConfirmPolicyAntileakageMapRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLang(lang: string): ConfirmPolicyAntileakageMapRequest {
        this['lang'] = lang;
        return this;
    }
}