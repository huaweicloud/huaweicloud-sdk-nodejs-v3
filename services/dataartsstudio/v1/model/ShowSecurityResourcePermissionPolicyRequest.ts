

export class ShowSecurityResourcePermissionPolicyRequest {
    public workspace?: string;
    private 'policy_id'?: string;
    public constructor(workspace?: string, policyId?: string) { 
        this['workspace'] = workspace;
        this['policy_id'] = policyId;
    }
    public withWorkspace(workspace: string): ShowSecurityResourcePermissionPolicyRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withPolicyId(policyId: string): ShowSecurityResourcePermissionPolicyRequest {
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