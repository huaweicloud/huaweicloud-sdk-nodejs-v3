

export class DeleteCustomizedCompliancePackagesRequest {
    private 'workspace_id'?: string;
    private 'content-type'?: string;
    private 'X-Language'?: string;
    public body?: Array<string>;
    public constructor(workspaceId?: string, contentType?: string, xLanguage?: string) { 
        this['workspace_id'] = workspaceId;
        this['content-type'] = contentType;
        this['X-Language'] = xLanguage;
    }
    public withWorkspaceId(workspaceId: string): DeleteCustomizedCompliancePackagesRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withContentType(contentType: string): DeleteCustomizedCompliancePackagesRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withXLanguage(xLanguage: string): DeleteCustomizedCompliancePackagesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: Array<string>): DeleteCustomizedCompliancePackagesRequest {
        this['body'] = body;
        return this;
    }
}