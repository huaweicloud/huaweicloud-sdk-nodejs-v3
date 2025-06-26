

export class DeletePolicyTemplateRequest {
    private 'policy_template_id'?: string;
    public constructor(policyTemplateId?: string) { 
        this['policy_template_id'] = policyTemplateId;
    }
    public withPolicyTemplateId(policyTemplateId: string): DeletePolicyTemplateRequest {
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