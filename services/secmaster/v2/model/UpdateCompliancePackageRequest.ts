import { CompliancePackageModel } from './CompliancePackageModel';


export class UpdateCompliancePackageRequest {
    private 'workspace_id'?: string;
    private 'compliance_packages_id'?: string;
    private 'content-type'?: string;
    private 'X-Language'?: string;
    public body?: CompliancePackageModel;
    public constructor(workspaceId?: string, compliancePackagesId?: string, contentType?: string, xLanguage?: string) { 
        this['workspace_id'] = workspaceId;
        this['compliance_packages_id'] = compliancePackagesId;
        this['content-type'] = contentType;
        this['X-Language'] = xLanguage;
    }
    public withWorkspaceId(workspaceId: string): UpdateCompliancePackageRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withCompliancePackagesId(compliancePackagesId: string): UpdateCompliancePackageRequest {
        this['compliance_packages_id'] = compliancePackagesId;
        return this;
    }
    public set compliancePackagesId(compliancePackagesId: string  | undefined) {
        this['compliance_packages_id'] = compliancePackagesId;
    }
    public get compliancePackagesId(): string | undefined {
        return this['compliance_packages_id'];
    }
    public withContentType(contentType: string): UpdateCompliancePackageRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withXLanguage(xLanguage: string): UpdateCompliancePackageRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CompliancePackageModel): UpdateCompliancePackageRequest {
        this['body'] = body;
        return this;
    }
}