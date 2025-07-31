

export class ShowClusterProtectPolicyTemplateRequest {
    private 'enterprise_project_id'?: string;
    private 'policy_template_id'?: string;
    public constructor(policyTemplateId?: string) { 
        this['policy_template_id'] = policyTemplateId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowClusterProtectPolicyTemplateRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPolicyTemplateId(policyTemplateId: string): ShowClusterProtectPolicyTemplateRequest {
        this['policy_template_id'] = policyTemplateId;
        return this;
    }
    public set policyTemplateId(policyTemplateId: string  | undefined) {
        this['policy_template_id'] = policyTemplateId;
    }
    public get policyTemplateId(): string | undefined {
        return this['policy_template_id'];
    }
}