

export class ListPolicyTemplateRequest {
    public offset?: number;
    public limit?: number;
    private 'policy_group_name'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListPolicyTemplateRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPolicyTemplateRequest {
        this['limit'] = limit;
        return this;
    }
    public withPolicyGroupName(policyGroupName: string): ListPolicyTemplateRequest {
        this['policy_group_name'] = policyGroupName;
        return this;
    }
    public set policyGroupName(policyGroupName: string  | undefined) {
        this['policy_group_name'] = policyGroupName;
    }
    public get policyGroupName(): string | undefined {
        return this['policy_group_name'];
    }
}