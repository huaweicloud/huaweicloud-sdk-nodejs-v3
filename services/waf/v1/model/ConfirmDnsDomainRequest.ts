

export class ConfirmDnsDomainRequest {
    private 'enterprise_project_id'?: string;
    private 'Content-Type'?: string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ConfirmDnsDomainRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withContentType(contentType: string): ConfirmDnsDomainRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}