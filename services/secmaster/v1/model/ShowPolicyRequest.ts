

export class ShowPolicyRequest {
    private 'Content-Type'?: string;
    private 'X-Secmaster-Version'?: string;
    private 'workspace_id'?: string;
    private 'policy_id'?: string;
    public constructor(contentType?: string, xSecmasterVersion?: string, workspaceId?: string, policyId?: string) { 
        this['Content-Type'] = contentType;
        this['X-Secmaster-Version'] = xSecmasterVersion;
        this['workspace_id'] = workspaceId;
        this['policy_id'] = policyId;
    }
    public withContentType(contentType: string): ShowPolicyRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withXSecmasterVersion(xSecmasterVersion: string): ShowPolicyRequest {
        this['X-Secmaster-Version'] = xSecmasterVersion;
        return this;
    }
    public set xSecmasterVersion(xSecmasterVersion: string  | undefined) {
        this['X-Secmaster-Version'] = xSecmasterVersion;
    }
    public get xSecmasterVersion(): string | undefined {
        return this['X-Secmaster-Version'];
    }
    public withWorkspaceId(workspaceId: string): ShowPolicyRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withPolicyId(policyId: string): ShowPolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
}