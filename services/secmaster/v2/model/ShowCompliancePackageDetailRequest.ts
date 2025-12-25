

export class ShowCompliancePackageDetailRequest {
    private 'compliance_packages_id'?: string;
    private 'workspace_id'?: string;
    private 'content-type'?: string;
    private 'X-Language'?: string;
    public constructor(compliancePackagesId?: string, workspaceId?: string, contentType?: string, xLanguage?: string) { 
        this['compliance_packages_id'] = compliancePackagesId;
        this['workspace_id'] = workspaceId;
        this['content-type'] = contentType;
        this['X-Language'] = xLanguage;
    }
    public withCompliancePackagesId(compliancePackagesId: string): ShowCompliancePackageDetailRequest {
        this['compliance_packages_id'] = compliancePackagesId;
        return this;
    }
    public set compliancePackagesId(compliancePackagesId: string  | undefined) {
        this['compliance_packages_id'] = compliancePackagesId;
    }
    public get compliancePackagesId(): string | undefined {
        return this['compliance_packages_id'];
    }
    public withWorkspaceId(workspaceId: string): ShowCompliancePackageDetailRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withContentType(contentType: string): ShowCompliancePackageDetailRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withXLanguage(xLanguage: string): ShowCompliancePackageDetailRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
}