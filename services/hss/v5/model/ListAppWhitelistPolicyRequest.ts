

export class ListAppWhitelistPolicyRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'policy_name'?: string;
    private 'policy_type'?: string;
    private 'learning_status'?: string;
    public intercept?: boolean;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAppWhitelistPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListAppWhitelistPolicyRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAppWhitelistPolicyRequest {
        this['limit'] = limit;
        return this;
    }
    public withPolicyName(policyName: string): ListAppWhitelistPolicyRequest {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withPolicyType(policyType: string): ListAppWhitelistPolicyRequest {
        this['policy_type'] = policyType;
        return this;
    }
    public set policyType(policyType: string  | undefined) {
        this['policy_type'] = policyType;
    }
    public get policyType(): string | undefined {
        return this['policy_type'];
    }
    public withLearningStatus(learningStatus: string): ListAppWhitelistPolicyRequest {
        this['learning_status'] = learningStatus;
        return this;
    }
    public set learningStatus(learningStatus: string  | undefined) {
        this['learning_status'] = learningStatus;
    }
    public get learningStatus(): string | undefined {
        return this['learning_status'];
    }
    public withIntercept(intercept: boolean): ListAppWhitelistPolicyRequest {
        this['intercept'] = intercept;
        return this;
    }
}