

export class CreateQuickAccessDomainRequest {
    public projectid?: string;
    public instanceid?: string;
    private 'enterprise_project_id'?: string;
    private 'Content-Type'?: string;
    public constructor(projectid?: string, instanceid?: string) { 
        this['projectid'] = projectid;
        this['instanceid'] = instanceid;
    }
    public withProjectid(projectid: string): CreateQuickAccessDomainRequest {
        this['projectid'] = projectid;
        return this;
    }
    public withInstanceid(instanceid: string): CreateQuickAccessDomainRequest {
        this['instanceid'] = instanceid;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateQuickAccessDomainRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withContentType(contentType: string): CreateQuickAccessDomainRequest {
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